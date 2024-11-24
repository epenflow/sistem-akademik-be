import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { useContainer } from 'class-validator';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
	const app = await NestFactory.create(AppModule);
	useContainer(app.select(AppModule), { fallbackOnErrors: true });

	app.useGlobalPipes(
		new ValidationPipe({
			/**
			 * Hapus properti apapun yang tidak ditentukan pada DTO
			 */
			whitelist: true,
			/**
			 * Throw error jika properti yang tidak ada dalam DTO
			 * masuk kedalam request
			 */
			forbidNonWhitelisted: true,
			transform: true,
		}),
	);
	app.enableCors({
		origin: String(process.env.HOST),
		credentials: true,
	});
	const PORT = Number(process.env.PORT || 3000);
	await app.listen(PORT);
}
bootstrap();

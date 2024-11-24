import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeOrmService } from 'src/common/services/configs';

@Module({
	imports: [
		/**
		 * Env Configurations
		 */
		ConfigModule.forRoot({
			envFilePath: '.env',
			isGlobal: true,
		}),
		/**
		 * TypeOrmModule configurations using TypeOrmService
		 */
		TypeOrmModule.forRootAsync({
			useClass: TypeOrmService,
		}),
	],
})
export class ConfigurationModule {}

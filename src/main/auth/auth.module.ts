import { Global, Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { JWTStrategy } from 'src/common/strategy';
import { AuthController } from 'src/main/auth/auth.controller';
import { AuthService } from 'src/main/auth/auth.service';

@Global()
@Module({
	imports: [
		JwtModule.registerAsync({
			imports: [ConfigModule],
			useFactory: async (config: ConfigService) => ({
				secret: config.get<string>('SECRET'),
				signOptions: {
					expiresIn: '7d',
				},
			}),
			inject: [ConfigService],
		}),
	],
	controllers: [AuthController],
	providers: [AuthService, JWTStrategy],
	exports: [AuthService, JwtModule, JWTStrategy],
})
export class AuthModule {}

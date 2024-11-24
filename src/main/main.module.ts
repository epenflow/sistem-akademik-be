import { Module } from '@nestjs/common';
import { UsersModule } from 'src/main/users/users.module';
/**
 *
 * ----------------------------------------------------------
 * Custom module
 * ----------------------------------------------------------
 *
 */
import {
	AbilityModule,
	EntityModule,
	ServiceModule,
	ValidationModule,
} from 'src/common/modules';
import { AuthModule } from 'src/main/auth/auth.module';

@Module({
	imports: [
		/**
		 *
		 * ----------------------------------------------------------
		 * Shared module
		 * ----------------------------------------------------------
		 *
		 */
		EntityModule,
		ValidationModule,
		ServiceModule,
		AbilityModule,

		/**
		 *
		 * ----------------------------------------------------------
		 *  Main Modules
		 * ----------------------------------------------------------
		 *
		 */
		AuthModule,
		UsersModule,
	],
	exports: [
		/**
		 *
		 * ----------------------------------------------------------
		 * Shared Module
		 * ----------------------------------------------------------
		 *
		 */
		ValidationModule,
		ServiceModule,

		/**
		 *
		 * ----------------------------------------------------------
		 *  Main Modules
		 * ----------------------------------------------------------
		 *
		 */
		AuthModule,
		UsersModule,
	],
})
export class MainModule {}

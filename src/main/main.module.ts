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
	EntityModule,
	ServiceModule,
	ValidationModule,
} from 'src/common/modules';

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

		/**
		 *
		 * ----------------------------------------------------------
		 *  Main Modules
		 * ----------------------------------------------------------
		 *
		 */
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
		UsersModule,
	],
})
export class MainModule {}

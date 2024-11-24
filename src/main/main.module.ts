import { Module } from '@nestjs/common';
import { EntityModule, ValidationModule } from 'src/common/modules';
import { UsersModule } from 'src/main/users/users.module';

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

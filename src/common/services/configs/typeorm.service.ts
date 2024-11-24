import { Injectable } from '@nestjs/common';
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from '@nestjs/typeorm';

/**
 *
 * ----------------------------------------------------------
 * TypeOrm Service Configurations
 * ----------------------------------------------------------
 *
 */
@Injectable()
export class TypeOrmService implements TypeOrmOptionsFactory {
	createTypeOrmOptions():
		| Promise<TypeOrmModuleOptions>
		| TypeOrmModuleOptions {
		/**
		 *
		 * ----------------------------------------------------------
		 * TypeORM options configurations
		 * ----------------------------------------------------------
		 *
		 */
		const options: TypeOrmModuleOptions = {
			type: 'postgres',
			host: process.env.DB_HOST,
			port: Number(process.env.DB_PORT),
			username: process.env.DB_USERNAME,
			password: String(process.env.DB_PASSWORD),
			database: process.env.DB_DATABASE,
			synchronize: true,
			autoLoadEntities: true,
			logging: true,
		};
		return options;
	}
}

import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';

/**
 *
 * ----------------------------------------------------------
 * Custom Bcrypt Service
 * ----------------------------------------------------------
 *
 */
@Injectable()
export class BcryptService {
	private readonly saltRound = Number(process.env.SALT_ROUNDS);

	async hash(value: string | Buffer) {
		const salt = await bcrypt.genSalt(this.saltRound);
		return await bcrypt.hash(value, salt);
	}

	async compare(data: string | Buffer, encrypted: string) {
		return bcrypt.compare(data, encrypted);
	}
}

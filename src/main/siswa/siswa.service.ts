import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Siswa } from 'src/common/entity';
import { Repository } from 'typeorm';

@Injectable()
export class SiswaService {
	constructor(
		@InjectRepository(Siswa) private readonly siswa: Repository<Siswa>,
	) {}

	async findOne(id: string) {
		return await this.siswa.findOne({
			where: {
				id,
			},
		});
	}

	async findOneByUser(id: string) {
		return await this.siswa.findOne({
			where: {
				user: {
					id,
				},
			},
		});
	}
}

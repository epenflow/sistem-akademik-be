import { Inject, Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserDetailsDTO } from 'src/common/dto/user.dto';
import { Guru, Siswa, Users } from 'src/common/entity';
import { UserRole } from 'src/common/enums';
import { BcryptService } from 'src/common/services';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
	private readonly logger = new Logger(UsersService.name);
	constructor(
		@InjectRepository(Users)
		private readonly users: Repository<Users>,
		@InjectRepository(Siswa)
		private readonly siswa: Repository<Siswa>,
		@InjectRepository(Guru)
		private readonly guru: Repository<Guru>,
		@Inject(BcryptService)
		private readonly bcrypt: BcryptService,
	) {}

	async create(inputs: UserDetailsDTO) {
		const password = await this.bcrypt.hash(inputs.password);
		const usersInput: Partial<Users> = {
			username: inputs.username,
			email: inputs.email,
			password,
			role: inputs.role,
		};
		const createUser = this.users.create(usersInput);
		const user = await this.users.save(createUser);

		const userDetailsInput: Partial<UserDetailsDTO> = {
			nama: inputs.nama,
			tanggal_lahir: inputs.tanggal_lahir,
			jenis_kelamin: inputs.jenis_kelamin,
			alamat: inputs.alamat,
			no_telepon: inputs.no_telepon,
		};

		switch (user.role) {
			case UserRole.SISWA:
				const createSiswa = this.siswa.create({
					...userDetailsInput,
					user,
				});
				await this.siswa.save(createSiswa);
				break;
			case UserRole.ADMIN:
				const createGuru = this.guru.create({
					...userDetailsInput,
					user,
				});
				await this.guru.save(createGuru);
		}

		return user;
	}
	async find() {
		return await this.users.find();
	}

	async findOne(id: string) {
		const user = await this.users.findOne({
			where: { id },
		});
		return user;
	}
}

import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserDetailsDTO } from 'src/common/dto/user.dto';
import { Guru, Siswa, Users } from 'src/common/entity';
import { UserRole } from 'src/common/enums';
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
	) {}

	async create(users: UserDetailsDTO) {
		const _user_: Partial<Users> = {
			username: users.username,
			email: users.email,
			password: users.password,
			role: users.role,
		};
		const createUser = this.users.create(_user_);
		const user = await this.users.save(createUser);

		const details: Partial<UserDetailsDTO> = {
			nama: users.nama,
			tanggal_lahir: users.tanggal_lahir,
			jenis_kelamin: users.jenis_kelamin,
			alamat: users.alamat,
			no_telepon: users.no_telepon,
		};

		if (user.role === UserRole.SISWA) {
			const createSiswa = this.siswa.create({ ...details, user });
			this.logger.debug(createSiswa);
			await this.siswa.save(createSiswa);
		}
		if (user.role === UserRole.GURU) {
			const createGuru = this.guru.create({
				...details,
				user,
			});
			await this.guru.save(createGuru);
		}
		return user;
	}
	async get() {
		return await this.users.find();
	}
}

import { Controller, Get, Param } from '@nestjs/common';
import { Auth } from 'src/common/decorators';
import { AuthResponse } from 'src/common/interfaces';
import { SiswaService } from 'src/main/siswa/siswa.service';

@Controller('siswa')
export class SiswaController {
	constructor(private readonly siswaService: SiswaService) {}

	@Get(':id')
	async findOne(@Param('id') id: string) {
		return await this.siswaService.findOne(id);
	}

	@Get()
	async findByAuth(@Auth() auth: AuthResponse) {
		console.log(auth.payload.id);
		return await this.siswaService.findOneByUser(auth.payload.id);
	}
}

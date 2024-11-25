import { Module } from '@nestjs/common';
import { SiswaController } from 'src/main/siswa/siswa.controller';
import { SiswaService } from 'src/main/siswa/siswa.service';

@Module({
	controllers: [SiswaController],
	providers: [SiswaService],
	exports: [SiswaService],
})
export class SiswaModule {}

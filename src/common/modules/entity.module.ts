import { Global, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Guru, Siswa, Users } from 'src/common/entity';

@Global()
@Module({
	imports: [TypeOrmModule.forFeature([Users, Siswa, Guru])],
	exports: [TypeOrmModule],
})
export class EntityModule {}

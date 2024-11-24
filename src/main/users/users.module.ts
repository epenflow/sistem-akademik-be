import { Module } from '@nestjs/common';
import { UsersController } from 'src/main/users/users.controller';
import { UsersService } from 'src/main/users/users.service';

@Module({
	controllers: [UsersController],
	providers: [UsersService],
	exports: [UsersService],
})
export class UsersModule {}

import { Body, Controller, Get, Logger, Post } from '@nestjs/common';
import { UserDetailsDTO } from 'src/common/dto/user.dto';
import { UsersService } from 'src/main/users/users.service';

@Controller('users')
export class UsersController {
	private readonly logger = new Logger(UsersController.name);
	constructor(private readonly userService: UsersService) {}

	@Post()
	async create(@Body() users: UserDetailsDTO) {
		return await this.userService.create(users);
	}

	@Get()
	async get() {
		this.logger.debug('get all the data');
		return await this.userService.get();
	}
}

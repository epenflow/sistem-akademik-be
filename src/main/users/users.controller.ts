import {
	Body,
	Controller,
	Get,
	Logger,
	Param,
	Post,
	UseGuards,
} from '@nestjs/common';
import { AdminRole } from 'src/common/decorators';
import { UserDetailsDTO } from 'src/common/dto/user.dto';
import { JWTGuard, RolesGuard } from 'src/common/guards';
import { UsersService } from 'src/main/users/users.service';

/**
 *
 * ----------------------------------------------------------
 * Only authorize admin can access this routes
 * ----------------------------------------------------------
 *
 */
@UseGuards(JWTGuard, RolesGuard)
@AdminRole()
@Controller('users')
export class UsersController {
	private readonly logger = new Logger(UsersController.name);
	constructor(private readonly userService: UsersService) {}

	@Post()
	async create(@Body() users: UserDetailsDTO) {
		return await this.userService.create(users);
	}

	@Get()
	async find() {
		return await this.userService.find();
	}

	@Get(':id')
	async findOne(@Param('id') id: string) {
		return this.userService.findOne(id);
	}
}

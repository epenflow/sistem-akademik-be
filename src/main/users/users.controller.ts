import { Body, Controller, Get, Logger, Post, UseGuards } from '@nestjs/common';
import { SetAbilities } from 'src/common/decorators';
import { UserDetailsDTO } from 'src/common/dto/user.dto';
import { Users } from 'src/common/entity';
import { AbilityActions } from 'src/common/enums';
import { JWTGuard, RolesGuard } from 'src/common/guards';
import { AbilityGuard } from 'src/common/guards/ability.guard';
import { UsersService } from 'src/main/users/users.service';

@UseGuards(JWTGuard, AbilityGuard, RolesGuard)
@Controller('users')
export class UsersController {
	private readonly logger = new Logger(UsersController.name);
	constructor(private readonly userService: UsersService) {}

	@Post()
	@SetAbilities([AbilityActions.CREATE, Users])
	async create(@Body() users: UserDetailsDTO) {
		return await this.userService.create(users);
	}

	@Get()
	@SetAbilities([AbilityActions.READ, Users])
	async get() {
		return await this.userService.get();
	}
}

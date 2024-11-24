import { Global, Module } from '@nestjs/common';
import { AbilityFactory } from 'src/common/factories';

@Global()
@Module({
	providers: [AbilityFactory],
	exports: [AbilityFactory],
})
export class AbilityModule {}

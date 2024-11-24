import { Global, Module } from '@nestjs/common';
import { BcryptService } from 'src/common/services';

@Global()
@Module({
	providers: [BcryptService],
	exports: [BcryptService],
})
export class ServiceModule {}

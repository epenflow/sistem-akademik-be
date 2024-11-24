import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
/**
 *
 * ----------------------------------------------------------
 * 	DESCRIPTIONS!!!
 * ----------------------------------------------------------
 *
 */
import { MainModule } from 'src/main/main.module';
import { ConfigurationModule } from 'src/common/modules/configs';

@Module({
	imports: [ConfigurationModule, MainModule],
	controllers: [AppController],
	providers: [AppService],
})
export class AppModule {}

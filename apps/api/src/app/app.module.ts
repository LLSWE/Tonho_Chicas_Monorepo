import { Module } from '@nestjs/common';
import { AppController } from './health/app.controller';
import { AppService } from './health/app.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }

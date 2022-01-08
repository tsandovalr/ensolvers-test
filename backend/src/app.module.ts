import { ConfigModule } from '@nestjs/config';
import { TasksModule } from './tasks/tasks.module';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RouterModule } from '@nestjs/core';


@Module({
  imports: [
    TasksModule,
    ConfigModule.forRoot({
      isGlobal:true
    }),
    RouterModule.register([
      {
        path: 'api/tasks',
        module: TasksModule,
      },
    ]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

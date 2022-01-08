import { TasksController } from './tasks.controller';
import { TasksService } from './tasks.service';
import { DatabaseModule } from '../database/database.module';
import { Module } from "@nestjs/common";
import { taskProvider } from 'src/providers/task.provider';

@Module({
    imports: [DatabaseModule],
    controllers: [TasksController],
    providers: [...taskProvider, TasksService],
})
export class TasksModule {}
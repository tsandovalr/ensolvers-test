import { TasksService } from './tasks.service';
import { Task } from 'src/entities/task.entity';
import { Controller, Get } from "@nestjs/common";

@Controller()
export class TasksController{
    constructor(private tasksService: TasksService) {}

    @Get()
    getAllTasks(): Promise<Task[]> {
        return this.tasksService.getTasks();
    }

}
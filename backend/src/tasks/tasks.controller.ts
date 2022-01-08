import { TasksService } from './tasks.service';
import { Controller } from "@nestjs/common";

@Controller()
export class TasksController{
    constructor(private tasksService: TasksService) {}

    

}
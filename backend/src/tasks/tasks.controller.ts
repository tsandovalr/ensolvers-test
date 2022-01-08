import { TasksService } from './tasks.service';
import { Task } from 'src/entities/task.entity';
import { Body, Controller, Get, Param, Patch, Post, Delete } from "@nestjs/common";

@Controller()
export class TasksController{
    constructor(private tasksService: TasksService) {}

    @Get()
    getAllTasks(): Promise<Task[]> {
        return this.tasksService.getTasks();
    }

    @Post() 
    create(@Body() task:Task) {
        return this.tasksService.addTask(task);
    }

    @Get(':id')
    getOneTask(@Param('id') id: string): Promise<Task> {
        return this.tasksService.findOne(Number(id));
    }

    @Patch('id')
    updateTask(@Param('id') id: string, @Body() task:Task,): Promise<Task> {
        return this.tasksService.update(Number(id), task);
    }

    @Delete(':id')
    deleteTask(@Param('id') id: string) {
        return this.tasksService.delete(Number(id));
    }
}
import { Inject, Injectable } from '@nestjs/common';
import { Task } from 'src/entities/task.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TasksService {
    constructor(
        @Inject('TASKS_REPOSITORY') 
        private tasksRepository: Repository<Task>,
    
    ) {}


    getTasks(): Promise<Task[]>{
        return this.tasksRepository.find();
    }
}
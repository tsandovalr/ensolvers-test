import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { Task } from 'src/entities/task.entity';
import { DeleteResult, InsertResult, Repository } from 'typeorm';

@Injectable()
export class TasksService {
    constructor(
        @Inject('TASKS_REPOSITORY') 
        private tasksRepository: Repository<Task>,
    
    ) {}


    async getTasks(): Promise<Task[]>{
        return this.tasksRepository.find();
    }

    async addTask(task: Task): Promise<InsertResult> {
        return this.tasksRepository.insert(task);
    }

    async findOne(id: number): Promise<Task> {
        return this.tasksRepository.findOne(id);
    }

    async update(id: number, task:Task): Promise<Task> {
        const taskToUpdate = await this.findOne(id);
        if(taskToUpdate === undefined) {
            throw new NotFoundException();
        }
        await this.tasksRepository.update(id, task);
        return this.findOne(id);
    }

    async delete(id: number): Promise<DeleteResult> {
        const taskToDelete = await this.findOne(id);
        if(taskToDelete === undefined) {
            throw new NotFoundException();
        }
        
        return this.tasksRepository.delete(id);
    }

}
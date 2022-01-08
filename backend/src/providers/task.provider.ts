import { Provider } from "@nestjs/common";
import { Task } from "src/entities/task.entity";
import { Connection } from "typeorm";

export const taskProvider: Provider[] = [
    {
        provide: 'TASKS_REPOSITORY',
        useFactory: (connection: Connection) =>
            connection.getRepository(Task),
        inject: ['DATABASE_CONNECTION'],

    },
];
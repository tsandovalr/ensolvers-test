import { ConfigService } from '@nestjs/config';


import { Task } from "src/entities/task.entity"
import { createConnection } from "typeorm"

export const databaseProvider = [
    {
       provide: 'DATABASE_CONNECTION',
       inject:[ConfigService],
       useFactory: async (configService:ConfigService) => 
           await createConnection({
            type: 'postgres',
            host: configService.get<string>('HOST'),
            port: 5432,
            username: configService.get<string>('USERNAME'),
            password: configService.get<string>('PASSWORD'),
            database: 'qoivshfi',
            entities: [Task],
            synchronize: true,
//
           }),
       },
];
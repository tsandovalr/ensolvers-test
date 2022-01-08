
import { Task } from "src/entities/task.entity"
import { createConnection } from "typeorm"

export const databaseProvider = [
    {
       provide: 'DATABASE_CONNECTION',
       useFactory: async () => {
           await createConnection({
            type: 'postgres',
            host: 'castor.db.elephantsql.com',
            port: 5432,
            username: 'evezccjw',
            password: 'shSefRensaEW1crckSkTJVFd6CCI9jr_',
            database: 'evezccjw',
            entities: [Task],
            synchronize: true,

           })
       },
    }
]
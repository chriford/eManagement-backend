import { TypeOrmModuleOptions } from "@nestjs/typeorm/dist/interfaces/typeorm-options.interface";
import Organizer from "src/entities/organizer.entity";

const DATABASE_CONFIG: TypeOrmModuleOptions = {
    type: 'postgres',
    host: '172.18.0.2',
    port: 5432,
    username: 'postgres',
    password: 'root',
    database: 'postgres',
    entities: [
        Organizer,
        // '../entities/**/*.entity{.ts,.js}',
        // '../entities/*.entity{.ts,.js}',
    ],
    synchronize: true,
}

export default DATABASE_CONFIG;

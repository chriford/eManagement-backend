import {
    Column,
    Entity, PrimaryGeneratedColumn,
} from 'typeorm'

@Entity({name: 'users'})
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({nullable: false})
    username: string;

    @Column({nullable: false})
    password: string;

    @Column({default: new Date()})
    createdAt: Date;
}

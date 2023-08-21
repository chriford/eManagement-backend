import { OrganizerDto } from "src/DTOs/organizer.dto";
import { 
    BaseEntity,
    Entity,
    PrimaryGeneratedColumn,
    Column,
} from "typeorm";

@Entity({name: 'organizers'})
class Organizer extends BaseEntity{
    @PrimaryGeneratedColumn()
    id: string

    @Column()
    name: string

    @Column()
    short_form: string
}

export default Organizer

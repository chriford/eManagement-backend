import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { OrganizerDto } from "src/DTOs/organizer.dto";
import Organizer from "src/entities/organizer.entity";
import { OrganizerUpdateParams } from "src/utils/types";
import { Repository } from "typeorm";

@Injectable()
export class OrganizersService{
    constructor(
        @InjectRepository(Organizer) private organizerRepository: Repository<Organizer>
    ){}
    
    getAll() {
        const organizers = this.organizerRepository.find();
        return organizers;
    }

    getOne(id) {
        const organizer = this.organizerRepository.findOneBy({ id });
        return organizer;
    }

    create(organizerBody: OrganizerDto) {
        const organizer = this.organizerRepository.create({
            ...organizerBody
        });
        this.organizerRepository.save(organizer)
        return organizer;
    }

    update (id,  organizerBody: OrganizerUpdateParams) {
        const organizer = this.organizerRepository.update(
            { id },
            { ...organizerBody }
        );
        return organizer;
    }

    delete (id) {
        this.organizerRepository.delete({ id });
        const successMessage = "Organizer deleted successfully";
        return successMessage;
    }
}

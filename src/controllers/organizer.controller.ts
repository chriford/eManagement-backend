import { 
    Body, 
    Controller, 
    Delete, 
    Get, 
    HttpException, 
    Param, 
    ParseIntPipe, 
    Patch, 
    Post, 
    Put, 
} from "@nestjs/common";

import { OrganizerDto } from "src/DTOs/organizer.dto";
import Organizer from "src/entities/organizer.entity";
import { OrganizersService } from "src/services/organizer.service";

@Controller('organizers')
export class OrganizerController{
    constructor(
        private organizerService: OrganizersService
    ){}

    @Get()
    async fetchOrganizers(): Promise<OrganizerDto[]> {
        return await this.organizerService.getAll()
    }

    @Get(':id')
    async fetchOrganizer(@Param('id', ParseIntPipe) id: number): Promise<Organizer> {
        const organizer =  await this.organizerService.getOne(id)
        return organizer;
    }

    @Post('/create')
    async createOrganizer(@Body() organizerBody: OrganizerDto): Promise<string> {
        const organizer = await this.organizerService.create(organizerBody);
        
        return "organizer created successfully";
    }

    @Patch('/update/:id')
    async updateOrganizer(@Param('id', ParseIntPipe) id: number, organizerBody: OrganizerDto){
        await this.organizerService.update(id, organizerBody)
    }

    @Delete('/delete/:id')
    async deleteOrganizer(@Param('id', ParseIntPipe) id: number){
        await this.organizerService.delete(id)
    }
}

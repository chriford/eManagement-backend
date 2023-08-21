import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";

export class OrganizerDto {
    @ApiProperty()
    @IsString()
    name: string;

    @ApiProperty()
    @IsString()
    short_form: string;

    
}
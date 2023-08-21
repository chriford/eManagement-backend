import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import DATABASE_CONFIG from './config/database';
import { OrganizersService } from './services/organizer.service';
import { Repository } from 'typeorm';
import Organizer from './entities/organizer.entity';
import { OrganizerController } from './controllers/organizer.controller';

@Module({
  imports: [
    TypeOrmModule.forRoot(DATABASE_CONFIG),
    TypeOrmModule.forFeature([Organizer])
  ],
  controllers: [OrganizerController],
  providers: [OrganizersService],
})
export class AppModule {}

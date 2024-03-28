/* eslint-disable prettier/prettier */

import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SongsController } from './songs/songs.controller';
import { SongsService } from './songs/songs.service';
import { UsersModule } from './users/users.module';
import { DatabaseModule } from './database/database.module';
import { EmployeesModule } from './employees/employees.module';

@Module({
  imports: [UsersModule, DatabaseModule, EmployeesModule],
  controllers: [AppController, SongsController],
  providers: [AppService, SongsService],
})
export class AppModule {}

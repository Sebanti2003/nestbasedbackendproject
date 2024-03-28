/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { EmployeesService } from './employees.service';
import { EmployeesController } from './employees.controller';
import { DatabaseModule } from 'src/database/database.module';
import { Prisma } from '@prisma/client';
@Module({
  imports: [DatabaseModule],
  controllers: [EmployeesController],
  providers: [EmployeesService],
})
export class EmployeesModule {
  constructor(private readonly employeesService: EmployeesService) {}

}

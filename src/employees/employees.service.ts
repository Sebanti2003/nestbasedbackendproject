/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';
import { Prisma} from '@prisma/client';
// import {EmployeeCreateInput} from '@prisma/client'
import { DatabaseService } from 'src/database/database.service';
import { UpdateUserDto } from 'src/users/dto/update-user.dto';
@Injectable()
export class EmployeesService {
  constructor(private readonly dataservice:DatabaseService) {}
  async create(createEmployeeDto:Prisma.EmployeeCreateInput) {
    return this.dataservice.employee.create({data:createEmployeeDto})
  }

  async findAll(role?:'INTERN'|'SENIOR'|'JUNIOR') {
    if (role)return this.dataservice.employee.findMany({where:{
      role,
    }});
    return this.dataservice.employee.findMany();
  }

  async findOne(id: number) {
    return this.dataservice.employee.findUnique({where:{
      id,
    }});
  }

  async update(id: number, updateEmployeeDto: Prisma.EmployeeUpdateInput) {
    return this.dataservice.employee.update({
      where:{
        id,
      },
      data:updateEmployeeDto
    });
  }

  async remove(id: number) {
    return this.dataservice.employee.delete({where:{
      id
    }});
  }
}

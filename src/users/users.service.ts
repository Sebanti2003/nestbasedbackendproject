/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  private users = [
    {
      id: 1,
      name: 'sebanti dasgupta',
      email: 'sY3Lm@example.com',
      role: 'JUNIOR',
    },
    {
      id: 2,
      name: 'sandeep dasgupta',
      email: 'sandeepdasgupta@.com',
      role: 'SENIOR',
    },
    {
      id: 3,
      name: 'preeti dasgupta',
      email: 'preetidasgupta@.com',
      role: 'INTERN',   
    }
  ];
  findall(): object[] {
    return this.users;
  }
  findone(id: number): object {
    return this.users.find((user) => user.id == id);
  }
  create(CreateUserDto:CreateUserDto): object {
    const allusers=this.users.sort((a,b)=>a.id-b.id);
    const newuser={id:allusers[allusers.length-1].id+1,...CreateUserDto}
    this.users.push(newuser);
    return newuser;
  }
  updateone(id: number, UpdateUserDto: UpdateUserDto): object {
    this.users = this.users.map((user) => {
      if (user.id == id) {
        return { ...user, ...UpdateUserDto };
      }
      return user;
    });
    return this.users.find((user) => user.id == id);
  }
  deleteone(id: number): string {
    this.users=this.users.filter(user=>user.id!=id)
    return `this is deleteone function with id ${id}`
}
}

/* eslint-disable prettier/prettier */

import { Controller,Delete,Get, Post, Put} from '@nestjs/common';
import { SongsService } from './songs.service';

@Controller('songs')
export class SongsController {
    constructor(private readonly songsService:SongsService){}
    @Post('create')
    create(){
        return this.songsService.create('first songss');
    }
    @Post('create/:id')
    findal(){
        return this.songsService.findAll();
    }
    @Get()
    findall():string{
        return "All songs are gone"
    }
    @Get(':id')
    findone():string{
        return `song id is here`
    }
    @Put(':id')
    updateone():string{
        return "song id is updated"
    }
    @Delete(':id')
    deleteone():string{
        return "song id is deleted"
    }

}

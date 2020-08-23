import {
  Controller,
  Get,
  Post,
  Param,
  Body,
  Delete,
  Put,
  ParseIntPipe,
} from '@nestjs/common'
import { EventDTO } from './dto'
import { EventService } from './service'

@Controller('event')
export class EventController {
  constructor(private readonly service: EventService) {}
  @Post()
  create(@Body() event: EventDTO): void {
    this.service.create(event)
  }

  @Get()
  findAll(): EventDTO[] {
    return this.service.findAll()
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number): EventDTO {
    return this.service.findOne(id)
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number): void {
    this.service.remove(id)
  }

  @Put(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() event: EventDTO,
  ): EventDTO {
    return this.service.update(id, event)
  }
}

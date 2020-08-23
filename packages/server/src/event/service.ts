import { Injectable } from '@nestjs/common'
import { EventDAO } from './dao'
import { IEvent } from './interface'

@Injectable()
export class EventService {
  constructor(private readonly eventDAO: EventDAO) {}
  create(event: IEvent): void {
    this.eventDAO.add(event)
  }

  findAll(): IEvent[] {
    return this.eventDAO.findAll()
  }

  findOne(id: number): IEvent {
    return this.eventDAO.findById(id)
  }

  remove(id: number): void {
    this.eventDAO.delete(id)
  }

  update(id: number, event: IEvent): IEvent {
    return this.eventDAO.updateById(id, event)
  }
}

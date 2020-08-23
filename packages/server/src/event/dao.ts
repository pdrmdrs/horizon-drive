import { Injectable } from '@nestjs/common'
import { DataBase } from 'src/db/data-base'
import { IEvent } from './interface'

@Injectable()
export class EventDAO {
  constructor(private readonly dataBase: DataBase) {}

  add(event: IEvent): void {
    this.dataBase.events.push(event)
  }

  delete(id: number): void {
    const index = this.dataBase.events.findIndex(
      (event: IEvent) => event.id === id,
    )
    this.dataBase.events.splice(index, 1)
  }

  findAll(): IEvent[] {
    return this.dataBase.events
  }

  findById(id: number): IEvent {
    return this.dataBase.events.find((event: IEvent) => event.id === id)
  }

  updateById(id: number, event: IEvent): IEvent {
    const oldEvent: IEvent = this.findById(id)
    this.delete(id)
    const newEvent: IEvent = {
      ...oldEvent,
      ...event,
    }
    this.add(newEvent)
    return newEvent
  }
}

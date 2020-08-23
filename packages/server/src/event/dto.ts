import { IEvent } from './interface'

export class EventDTO implements IEvent {
  date: string
  description: string
  id: number
  image: string
  location: string
  title: string
}

import { Injectable } from '@nestjs/common'
import { IEvent } from 'src/event/interface'

@Injectable()
export class DataBase {
  events: IEvent[] = [
    {
      date: '10/10/2010',
      title: 'Event 1',
      description: 'description 1',
      id: 1,
      image: 'image 1',
      location: 'location 1',
    },
  ]
}

import { Module } from '@nestjs/common'
import { EventController } from './controller'
import { EventService } from './service'
import { EventDAO } from './dao'

@Module({
  controllers: [EventController],
  providers: [EventService, EventDAO],
})
export class EventModule {}

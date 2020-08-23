// import { Module, MiddlewareConsumer } from '@nestjs/common'
import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { EventModule } from 'src/event/module'
import { DataBaseModule } from 'src/db/data-base.module'
// import { Log } from 'src/middleware/log'

@Module({
  imports: [DataBaseModule, EventModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  // configure(consumer: MiddlewareConsumer): void {
  //   consumer.apply(Log).forRoutes('event')
  // }
}

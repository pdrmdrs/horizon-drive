import { Module, Global } from '@nestjs/common'
import { DataBase } from './data-base'

@Global()
@Module({
  providers: [DataBase],
  exports: [DataBase],
})
export class DataBaseModule {}

import { Injectable, NestMiddleware } from '@nestjs/common'
import { Request, Response } from 'express'

@Injectable()
export class Log implements NestMiddleware {
  use(req: Request, _: Response, next: () => void): void {
    console.log('Request...', req)
    next()
  }
}

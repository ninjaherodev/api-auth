import express, { type Express } from 'express'
import { AppRoutes } from './routes'
export class Server {
  private readonly app: Express
  private readonly port: number
  private readonly appRoutes: AppRoutes
  constructor (port: number) {
    this.port = port
    this.app = express()
    this.appRoutes = new AppRoutes(this.app)
  }

  // configureRoutes (): void {
  //   new AppRoutes(this.app)
  // }

  start (): void {
    this.app.listen(this.port, () => {
      console.log(`Server is running on http://localhost:${this.port}`)
    })
  }
}

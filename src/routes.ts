import { Router, type Express } from 'express'
export class AppRoutes {
  private readonly router: Router

  constructor (private readonly app: Express) {
    this.router = Router()
    this.routes()
  }

  private routes (): void {
    this.app.use('/api/v1', this.router)
    this.router.get('/movies', (req, res) => {
      res.send('hola nodejs')
    })
  }
}

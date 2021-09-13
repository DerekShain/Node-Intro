import { fakeDb } from '../db/fakeDb.js'
import BaseController from '../utils/BaseController.js'
import { burgersService } from '../services/BurgersService.js'

export class BurgersController extends BaseController {
  constructor() {
    super('api/burgers')
    this.router
      .get('', this.getBurgers)
      .get('/:id', this.getBurger)
      .post('', this.createBurger)
  }

  async getBurgers(req, res, next) {
    res.send(fakeDb.burgs)
  }

  async getBurger(req, res, next) {
    try {
      const id = req.params.id
      const burg = await burgersService.getById(id)
      res.send(burg)
    } catch (error) {
      next(error)
    }
  }

  async createBurger(req, res, next) {
    try {
      const newBurg = await burgersService.createBurger(req.body)
      res.send(newBurg)
    } catch (error) {
      next(error)
    }
  }
}

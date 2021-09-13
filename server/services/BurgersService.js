import { fakeDb } from '../db/fakeDb.js'
import { BadRequest, NotFound } from '../utils/Errors.js'

class BurgersService {
  getById(id) {
    const found = fakeDb.burgs.find(b => b.id.toString() === id)
    if (!found) {
      throw new NotFound('No burger by that id' + id)
    }
    return found
  }

  createBurger(burgerData) {
    const found = fakeDb.burgs.find(b => b.name === burgerData.name)
    if (found) {
      throw new BadRequest('Burgers exist')
    }
    burgerData.id = Math.floor(Math.random() * 2654)
    fakeDb.burgs.push(burgerData)
    return burgerData
  }
}

export const burgersService = new BurgersService()

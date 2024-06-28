import { Router } from 'express'
import { sanitizeSalaInput, findAll, findOne, add, update, remove } from './sala.controler.js'

export const salaRouter = Router()

salaRouter.get('/', findAll)
salaRouter.get('/:numSala', findOne)
salaRouter.post('/', sanitizeSalaInput, add)
salaRouter.put('/:numSala', sanitizeSalaInput, update)
salaRouter.patch('/:numSala', sanitizeSalaInput, update)
salaRouter.delete('/:numSala', remove)
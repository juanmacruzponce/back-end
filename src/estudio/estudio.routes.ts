import { Router } from 'express'
import { sanitizeEstudioInput, findAll, findOne, add, update, remove } from './estudio.controler.js'

export const estudioRouter = Router()

estudioRouter.get('/', findAll)
estudioRouter.get('/:id', findOne)
estudioRouter.post('/', sanitizeEstudioInput, add)
estudioRouter.put('/:id', sanitizeEstudioInput, update)
estudioRouter.patch('/:id', sanitizeEstudioInput, update)
estudioRouter.delete('/:id', remove)
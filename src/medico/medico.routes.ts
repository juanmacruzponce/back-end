import { Router } from 'express'
import { sanitizeMedicoInput, findAll, findOne, add, update, remove } from './medico.controler.js'

export const medicoRouter = Router()

medicoRouter.get('/', findAll)
medicoRouter.get('/:id', findOne)
medicoRouter.post('/', sanitizeMedicoInput, add)
medicoRouter.put('/:id', sanitizeMedicoInput, update)
medicoRouter.patch('/:id', sanitizeMedicoInput, update)
medicoRouter.delete('/:id', remove)
import { Router } from 'express'
import { sanitizeMedicoInput, findAll, findOne, add, update, remove } from './medico.controler.js'

export const medicoRouter = Router()

medicoRouter.get('/', findAll)
medicoRouter.get('/:matricula', findOne)
medicoRouter.post('/', sanitizeMedicoInput, add)
medicoRouter.put('/:matricula', sanitizeMedicoInput, update)
medicoRouter.patch('/:matricula', sanitizeMedicoInput, update)
medicoRouter.delete('/:matricula', remove)
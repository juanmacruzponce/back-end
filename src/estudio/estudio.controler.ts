import { Request, Response, NextFunction } from 'express'
import { EstudioRepository } from './estudio.repository.js'
import { Estudio } from './estudio.entity.js'

const repository = new EstudioRepository()

function sanitizeEstudioInput(req: Request, res: Response, next: NextFunction) {
  req.body.sanitizedInput = {
    nroacceso: req.body.name,
    descripcion: req.body.descripcion,
    estadoestudio: req.body.estadoestudio,
   
  }

  Object.keys(req.body.sanitizedInput).forEach((key) => {
    if (req.body.sanitizedInput[key] === undefined) {
      delete req.body.sanitizedInput[key]
    }
  })
  next()
}

async function findAll(req: Request, res: Response) {
  res.json({ data: await repository.findAll() })
}

async function findOne(req: Request, res: Response) {
  const id = req.params.nroacceso
  const estudio = await repository.findOne({ id })
  if (!estudio) {
    return res.status(404).send({ message: 'No se encontró el estudio' })
  }
  res.json({ data: estudio })
}

async function add(req: Request, res: Response) {
  const input = req.body.sanitizedInput

  const estudioInput = new Estudio(
    input.nroacceso,
    input.descripcion,
    input.estadoestudio,
    
  )

  const estudio = await repository.add(estudioInput)
  return res.status(201).send({ message: 'Estudio creado', data: estudio })
}

async function update(req: Request, res: Response) {
  const estudio = await repository.update(req.params.nroacceso, req.body.sanitizedInput)

  if (!estudio) {
    return res.status(404).send({ message: 'No se encontró el estudio' })
  }

  return res.status(200).send({ message: 'Estudio modificado con exito', data: estudio })
}

async function remove(req: Request, res: Response) {
  const id = req.params.nroacceso
  const estudio = await repository.delete({ id })

  if (!estudio) {
    res.status(404).send({ message: 'No se encontró el estudio' })
  } else {
    res.status(200).send({ message: 'Estudio eliminado con exito' })
  }
}

export { sanitizeEstudioInput, findAll, findOne, add, update, remove }

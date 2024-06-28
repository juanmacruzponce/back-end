import { Request, Response, NextFunction } from 'express'
import { SalaRepository } from './sala.repository.js'
import { Sala } from './sala.entity.js'

const repository = new SalaRepository()

function sanitizeSalaInput(req: Request, res: Response, next: NextFunction) {
  req.body.sanitizedInput = {
    numSala: req.body.numSala,
    piso: req.body.sala,
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
  const numSala = req.params.numSala
  const sala = await repository.findOne({ numSala })
  if (!sala) {
    return res.status(404).send({ message: 'No se encontró la sala' })
  }
  res.json({ data: sala })
}

async function add(req: Request, res: Response) {
  const input = req.body.sanitizedInput

  const salaInput = new sala(
    input.numSala,
    input.piso,
  )

  const sala = await repository.add(SalaInput)
  return res.status(201).send({ message: 'se agregó la sala', data: sala })
}


async function remove(req: Request, res: Response) {
  const numSala = req.params.numSala
  const sala = await repository.delete({ numSala })

  if (!sala) {
    res.status(404).send({ message: 'no se encontró la sala' })
  } else {
    res.status(200).send({ message: 'la sala fue borrada exitosamente' })
  }
}

export { sanitizeMedicoInput, findAll, findOne, add, update, remove }
async function add(req: Request, res: Response) {
    const input = req.body.sanitizedInput
  
    const salaInput = new Sala(
      input.numSala,
      input.piso,

    )

    const sala = await repository.add(salaInput)
    return res.status(201).send({ message: 'Sala agregada', data: sala })
  }
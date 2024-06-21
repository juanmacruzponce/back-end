import express, {NextFunction, Request, Response} from "express";
import { Medico } from "./medico/medico.entity.js";
import { it } from 'node:test'

const app =  express()
app.use(express.json())

const medicos = [
    new Medico(
      'Apellido',
      'Nombre',
      '12222',
      '3333',
      'traumatologo'
    ),
  ]

/*function sanitizeCharacterInput(req: Request, res: Response, next: NextFunction) {
  req.body.sanitizedInput = {
    apellido: req.body.apellido,
    nombre: req.body.nombre,
    dni: req.body.dni,
    matricula: req.body.matricula,
    especialidad: req.body.especialidad,
  }
}*/

app.get('/api/medicos',(req,res) =>{
    res.json({medicos})
})

app.get('/api/medicos/:matricula',(req,res) =>{
    const medicoEn = medicos.find((medicoEn) => medicoEn.matricula === req.params.matricula)
    if (!medicoEn) {
        return res.status(404).send({ message: 'Medico not found' })
      }
      res.json({ data: medicoEn })
})


app.post('/api/medicos', (req, res) => {
    const { apellido, nombre, dni, matricula, especialidad } = req.body
  
    const medico = new Medico(apellido, nombre, dni, matricula, especialidad)
  
    medicos.push(medico)
    return res.status(201).send({ message: 'Medico created', data: medico })
  })


app.put('/api/medicos/:matricula', (req,res) =>{
    const medicoEn = medicos.findIndex((medico) => medico.matricula === req.params.matricula)
    
    if (medicoEn === -1) {
        return res.status(404).send({ message: 'Medico not found' })
    }
    const input = {
        apellido: req.body.apellido,
        nombre: req.body.nombre,
        dni: req.body.dni,
        matricula: req.body.matricula,
        especialidad: req.body.especialidad
    }

    medicos[medicoEn] = { ...medicos[medicoEn], ...input}
    res.status(200).send({ message: 'Medic updated successfully', data: medicos[medicoEn] })
})

app.delete('/api/medicos/:matricula',(req,res) =>{
    const medicoEn = medicos.findIndex((medicoEn) => medicoEn.matricula === req.params.matricula)
    if (medicoEn === -1) {
        return res.status(404).send({ message: 'Medico not found' })
    } else {
        medicos.splice(medicoEn, 1)
        res.status(200).send({ message: 'Medic deleted successfully' })
    }
})

app.listen(3000, () => {
    console.log('Server runnning on http://localhost:3000/')
  })

import { Repository } from '../shared/repository.js'
import { Medico } from './medico.entity.js'

const medicos = [
    new Medico(
      'Apellido',
      'Nombre',
      '12222',
      '3333',
      'traumatologo'
    ),
  ]

export class MedicoRepository implements Repository<Medico> {
  public findAll(): Medico[] | undefined {
    return medicos
  }

  public findOne(item: { matricula: string }): Medico | undefined {
    return medicos.find((medico) => medico.matricula === item.matricula)
  }

  public add(item: Medico): Medico | undefined {
    medicos.push(item)
    return item
  }

  public update(item: Medico): Medico | undefined {
    const medicomatriculax = medicos.findIndex((medico) => medico.matricula === item.matricula)

    if  (medicomatriculax !== -1) {
     medicos[medicomatriculax] = { ... medicos[medicomatriculax], ...item }
    }
    return medicos[medicomatriculax]
  }

  public delete(item: { matricula: string }): Medico | undefined {
    const Medicomatriculax = medicos.findIndex((medico) => medico.matricula === item.matricula)

    if  (Medicomatriculax !== -1) {
        const deletedMedicos = medicos[Medicomatriculax]
        medicos.splice(Medicomatriculax, 1)
        return deletedMedicos
    }
  }
}
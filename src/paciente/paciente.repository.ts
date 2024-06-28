import { Repository } from '../shared/repository.js'
import { Paciente } from './paciente.entity.js'
import { db } from '../shared/db/connect.js'
import { ObjectId } from 'mongodb'

const pacientes = db.collection<Paciente>('pacientes')

export class PacienteRepository implements Repository<Paciente> {
  public async findAll(): Promise<Paciente[] | undefined> {
    return await pacientes.find().toArray()
  }

  public async findOne(item: { id: string }): Promise<Paciente | undefined> {
    const _id = new ObjectId(item.id)
    return (await pacientes.findOne({ _id })) || undefined
  }

  public async add(item: Paciente): Promise<Paciente | undefined> {
    item._id = (await pacientes.insertOne(item)).insertedId
    return item
  }

  public async update(id: string, item: Paciente): Promise<Paciente | undefined> {
    const _id = new ObjectId(id)
    return (await pacientes.findOneAndUpdate({ _id }, { $set: item }, { returnDocument: 'after' })) || undefined
  }

  public async delete(item: { id: string }): Promise<Paciente | undefined> {
    const _id = new ObjectId(item.id)
    return (await pacientes.findOneAndDelete({ _id })) || undefined
  }
}
import { Repository } from '../shared/repository.js'
import { Medico } from './medico.entity.js'
import { db } from '../shared/db/connect.js'
import { ObjectId } from 'mongodb'

const medicos = db.collection<Medico>('medicos')

export class MedicoRepository implements Repository<Medico> {
  public async findAll(): Promise<Medico[] | undefined> {
    return await medicos.find().toArray()
  }

  public async findOne(item: { matricula: string }): Promise<Medico | undefined> {
    const _id = new ObjectId(item.matricula)
    return (await medicos.findOne({ _id })) || undefined
  }

  public async add(item: Medico): Promise<Medico | undefined> {
    item._id = (await medicos.insertOne(item)).insertedId
    return item
  }

  public async update(matricula: string, item: Medico): Promise<Medico | undefined> {
    const _id = new ObjectId(matricula)
    return (await medicos.findOneAndUpdate({ _id }, { $set: item }, { returnDocument: 'after' })) || undefined
  }

  public async delete(item: { matricula: string }): Promise<Medico | undefined> {
    const _id = new ObjectId(item.matricula)
    return (await medicos.findOneAndDelete({ _id })) || undefined
  }
}
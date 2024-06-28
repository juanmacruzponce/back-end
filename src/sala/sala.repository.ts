import { Repository } from '../shared/repository.js'
import { Sala } from './sala.entity.js'
import { db } from '../shared/db/connect.js'
import { ObjectId } from 'mongodb'

const salas = db.collection<Sala>('salas')

export class SalaRepository implements Repository<Sala> {
  public async findAll(): Promise<Sala[] | undefined> {
    return await salas.find().toArray()
  }

  public async findOne(item: { numSala: number }): Promise<Sala | undefined> {
    const _id = new ObjectId(item.numSala)
    return (await salas.findOne({ _id })) || undefined
  }

  public async add(item: Sala): Promise<Sala | undefined> {
    item._id = (await salas.insertOne(item)).insertedId
    return item
  }

  public async update(numSala: number, item: Sala): Promise<Sala | undefined> {
    const _id = new ObjectId(numSala)
    return (await salas.findOneAndUpdate({ _id }, { $set: item }, { returnDocument: 'after' })) || undefined
  }

  public async delete(item: { numSala: number }): Promise<Sala | undefined> {
    const _id = new ObjectId(item.numSala)
    return (await salas.findOneAndDelete({ _id })) || undefined 
  }
}

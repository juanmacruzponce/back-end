import { Repository } from '../shared/repository.js'
import { Estudio } from './estudio.entity.js'
import { db } from '../shared/db/conn.js'
import { ObjectId } from 'mongodb'

const estudios = db.collection<Estudio>('estudios')

export class EstudioRepository implements Repository<Estudio> {
  public async findAll(): Promise<Estudio[] | undefined> {
    return await estudios.find().toArray()
  }

  public async findOne(item: { nroacceso: string }): Promise<Estudio | undefined> {
    const _id = new ObjectId(item.nroacceso)
    return (await estudios.findOne({ _id })) || undefined
  }

  public async add(item: Estudio): Promise<Estudio | undefined> {
    item._id = (await estudios.insertOne(item)).insertedId
    return item
  }

  public async update(nroacceso: string, item: Estudio): Promise<Estudio | undefined> {
    const _id = new ObjectId(nroacceso)
    return (await estudios.findOneAndUpdate({ _id }, { $set: item }, { returnDocument: 'after' })) || undefined
  }

  public async delete(item: { nroacceso: string }): Promise<Estudio | undefined> {
    const _id = new ObjectId(item.nroacceso)
    return (await estudios.findOneAndDelete({ _id })) || undefined
  }
}
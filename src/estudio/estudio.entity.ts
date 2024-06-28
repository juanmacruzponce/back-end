import { ObjectId } from 'mongodb'


export class Estudio {
  constructor(
    public nroacceso: string,
    public descripcion: string,
    public estadoestudio: number,
    public _id?: ObjectId,
  ) {}
}
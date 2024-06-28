import { ObjectId } from 'mongodb'

export class Sala{
    constructor(
        public numSala: number,
        public piso: number,
        public _id?: ObjectId,
    ){}
}
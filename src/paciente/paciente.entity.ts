import { ObjectId } from 'mongodb'

export class Paciente{
    constructor(
        public apellido: string,
        public nombre: string,
        public dni: number,
        public mail: string,
        public obrasocial: string,
        public _id?: ObjectId,
    ){}
}
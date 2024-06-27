import { ObjectId } from 'mongodb'

export class Medico{
    constructor(
        public apellido: string,
        public nombre: string,
        public dni: string,
        public matricula: string,
        public especialidad: string,
        public _id?: ObjectId,
    ){}
}
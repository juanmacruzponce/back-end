import { db } from '../shared/db/connect.js';
import { ObjectId } from 'mongodb';
const pacientes = db.collection('pacientes');
export class PacienteRepository {
    async findAll() {
        return await pacientes.find().toArray();
    }
    async findOne(item) {
        const _id = new ObjectId(item.id);
        return (await pacientes.findOne({ _id })) || undefined;
    }
    async add(item) {
        item._id = (await pacientes.insertOne(item)).insertedId;
        return item;
    }
    async update(id, item) {
        const _id = new ObjectId(id);
        return (await pacientes.findOneAndUpdate({ _id }, { $set: item }, { returnDocument: 'after' })) || undefined;
    }
    async delete(item) {
        const _id = new ObjectId(item.id);
        return (await pacientes.findOneAndDelete({ _id })) || undefined;
    }
}
//# sourceMappingURL=paciente.repository.js.map
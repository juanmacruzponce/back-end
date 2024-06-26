import { db } from '../shared/db/connect.js';
import { ObjectId } from 'mongodb';
const medicos = db.collection('medicos');
export class MedicoRepository {
    async findAll() {
        return await medicos.find().toArray();
    }
    async findOne(item) {
        const _id = new ObjectId(item.id);
        return (await medicos.findOne({ _id })) || undefined;
    }
    async add(item) {
        item._id = (await medicos.insertOne(item)).insertedId;
        return item;
    }
    async update(id, item) {
        const _id = new ObjectId(id);
        return (await medicos.findOneAndUpdate({ _id }, { $set: item }, { returnDocument: 'after' })) || undefined;
    }
    async delete(item) {
        const _id = new ObjectId(item.id);
        return (await medicos.findOneAndDelete({ _id })) || undefined;
    }
}
//# sourceMappingURL=medico.repository.js.map
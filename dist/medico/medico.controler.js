import { MedicoRepository } from './medico.repository.js';
import { Medico } from './medico.entity.js';
const repository = new MedicoRepository();
function sanitizeMedicoInput(req, res, next) {
    req.body.sanitizedInput = {
        apellido: req.body.apellido,
        nombre: req.body.nombre,
        dni: req.body.dni,
        matricula: req.body.matricula,
        especialidad: req.body.especialidad,
    };
    Object.keys(req.body.sanitizedInput).forEach((key) => {
        if (req.body.sanitizedInput[key] === undefined) {
            delete req.body.sanitizedInput[key];
        }
    });
    next();
}
async function findAll(req, res) {
    res.json({ data: await repository.findAll() });
}
async function findOne(req, res) {
    const id = req.params.matricula;
    const medico = await repository.findOne({ id });
    if (!medico) {
        return res.status(404).send({ message: 'Medico not found' });
    }
    res.json({ data: medico });
}
async function add(req, res) {
    const input = req.body.sanitizedInput;
    const medicoInput = new Medico(input.apellido, input.nombre, input.dni, input.matricula, input.especialidad);
    const medico = await repository.add(medicoInput);
    return res.status(201).send({ message: 'medico created', data: medico });
}
async function update(req, res) {
    const medico = await repository.update(req.params.matriucla, req.body.sanitizedInput);
    if (!medico) {
        return res.status(404).send({ message: 'medico not found' });
    }
    return res.status(200).send({ message: 'medico updated successfully', data: medico });
}
async function remove(req, res) {
    const id = req.params.matricula;
    const medico = await repository.delete({ id });
    if (!medico) {
        res.status(404).send({ message: 'medico not found' });
    }
    else {
        res.status(200).send({ message: 'medico deleted successfully' });
    }
}
export { sanitizeMedicoInput, findAll, findOne, add, update, remove };
//# sourceMappingURL=medico.controler.js.map
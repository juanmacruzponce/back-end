import { PacienteRepository } from './paciente.repository.js';
import { Paciente } from './paciente.entity.js';
const repository = new PacienteRepository();
function sanitizePacienteInput(req, res, next) {
    req.body.sanitizedInput = {
        apellido: req.body.apellido,
        nombre: req.body.nombre,
        dni: req.body.dni,
        mail: req.body.mail,
        obrasocial: req.body.obrasocial,
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
    const id = req.params.dni;
    const Paciente = await repository.findOne({ id });
    if (!Paciente) {
        return res.status(404).send({ message: 'Paciente not found' });
    }
    res.json({ data: Paciente });
}
async function add(req, res) {
    const input = req.body.sanitizedInput;
    const pacienteInput = new Paciente(input.apellido, input.nombre, input.dni, input.mail, input.obrasocial);
    const paciente = await repository.add(pacienteInput);
    return res.status(201).send({ message: 'Paciente created', data: Paciente });
}
async function update(req, res) {
    const Paciente = await repository.update(req.params.matriucla, req.body.sanitizedInput);
    if (!Paciente) {
        return res.status(404).send({ message: 'Paciente not found' });
    }
    return res.status(200).send({ message: 'Paciente updated successfully', data: Paciente });
}
async function remove(req, res) {
    const id = req.params.dni;
    const Paciente = await repository.delete({ id });
    if (!Paciente) {
        res.status(404).send({ message: 'Paciente not found' });
    }
    else {
        res.status(200).send({ message: 'Paciente deleted successfully' });
    }
}
export { sanitizePacienteInput, findAll, findOne, add, update, remove };
//# sourceMappingURL=paciente.controler.js.map
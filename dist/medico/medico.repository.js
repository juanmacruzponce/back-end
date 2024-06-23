import { Medico } from './medico.entity.js';
const medicos = [
    new Medico('Apellido', 'Nombre', '12222', '3333', 'traumatologo'),
];
export class MedicoRepository {
    findAll() {
        return medicos;
    }
    findOne(item) {
        return medicos.find((medico) => medico.matricula === item.matricula);
    }
    add(item) {
        medicos.push(item);
        return item;
    }
    update(item) {
        const medicomatriculax = medicos.findIndex((medico) => medico.matricula === item.matricula);
        if (medicomatriculax !== -1) {
            medicos[medicomatriculax] = { ...medicos[medicomatriculax], ...item };
        }
        return medicos[medicomatriculax];
    }
    delete(item) {
        const Medicomatriculax = medicos.findIndex((medico) => medico.matricula === item.matricula);
        if (Medicomatriculax !== -1) {
            const deletedMedicos = medicos[Medicomatriculax];
            medicos.splice(Medicomatriculax, 1);
            return deletedMedicos;
        }
    }
}
//# sourceMappingURL=medico.repository.js.map
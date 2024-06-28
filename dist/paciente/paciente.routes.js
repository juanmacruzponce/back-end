import { Router } from 'express';
import { sanitizePacienteInput, findAll, findOne, add, update, remove } from './paciente.controler.js';
export const pacienteRouter = Router();
pacienteRouter.get('/', findAll);
pacienteRouter.get('/:dni', findOne);
pacienteRouter.post('/', sanitizePacienteInput, add);
pacienteRouter.put('/:dni', sanitizePacienteInput, update);
pacienteRouter.patch('/:dni', sanitizePacienteInput, update);
pacienteRouter.delete('/:dni', remove);
//# sourceMappingURL=paciente.routes.js.map
import { Medico } from "../models/medico.models";

export const getMedico = async () => {
    return await Medico.findAll();
}

export const getMedicoId = async (id: number) => {
    const medico = await Medico.findByPk(id);
    if (!medico) {
        throw new Error("Médico no encontrado");
    }
    return medico;
}

export const createMedico = async (nombre: string, email: string) => {
    const medico = await Medico.create({ nombre, email });
    return medico;
}

export const updateMedico = async (id: number, nombre: string, email: string) => {
    const medico = await Medico.findByPk(id);
    if (!medico) {
        throw new Error("Médico no encontrado");
    }
    await medico.update({ nombre, email  });
    return medico;
}

export const deleteMedico = async (id: number) => {
    const medico = await Medico.findByPk(id);
    if (!medico) {
        throw new Error("Médico no encontrado");
    }
    await medico.destroy();
    return;
}
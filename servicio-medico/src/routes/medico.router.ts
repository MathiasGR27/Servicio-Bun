import type { FastifyInstance } from "fastify";
import { getMedico, getMedicoId, createMedico,updateMedico,deleteMedico  } from "../controllers/medico.controller";

export const medicoRoutes = async (app: FastifyInstance) => {
    app.get("/medicos", getMedico);

    app.get("/medicos/:id", async (req, reply) => {
        try {
            const { id } = req.params as any;
            return await getMedicoId(Number(id));
        } catch (error) {
            console.error(error);
            reply.status(404).send({ error: "No se pudo obtener el médico" });
        }
    });

    app.post("/medicos", async (req, reply) => {
        try {
            const medico = req.body as any;
            return await createMedico(medico.nombre, medico.email);
        } catch (error) {
            console.error(error);
            reply.status(404).send({ error: "No se pudo crear el médico" });
        }
    });

    app.put("/medicos/:id", async (req, reply) => {
        try {
            const { id } = req.params as any;
            const medico = req.body as any;
            return await updateMedico(Number(id), medico.nombre, medico.email);
        } catch (error) {
            console.error(error);
            reply.status(404).send({ error: "No se pudo actualizar el médico" });
        }
    });

    app.delete("/medicos/:id", async (req, reply) => {
        try {
            const { id } = req.params as any;
            return await deleteMedico(Number(id));
        } catch (error) {
            console.error(error);
            reply.status(404).send({ error: "No se pudo eliminar el médico" });
        }
    });
}
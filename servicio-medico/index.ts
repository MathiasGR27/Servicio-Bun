import Fastify from "fastify";
import dotenv from "dotenv";
import { sequelize } from "./src/config/database";
import { medicoRoutes } from "./src/routes/medico.router";

dotenv.config();

const app = Fastify({
    logger: true
});

app.register(medicoRoutes, { prefix: "/api" });

const start = async () => {
    try {
        await sequelize.authenticate();
        app.log.info("Conexión a la base de datos establecida correctamente");

        await sequelize.sync();
        app.log.info("Modelos sincronizados con la base de datos");

        const port = Number(process.env.DB_PORT) || 3001;

        app.listen({ port: port, host: "0.0.0.0" });

        app.log.info(`Servidor escuchando en el puerto ${port}`);
    } catch (error) {
        console.error("No se pudo conectar a la base de datos:", error);
    }
};

start();
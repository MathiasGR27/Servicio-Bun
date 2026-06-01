import { DataTypes } from "sequelize";
import { sequelize } from "../config/database";

export const Medico = sequelize.define("medico", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: true
    }
},
    {
        tableName: "medicos",
        timestamps: false
    });
import db from "../database/db.js";

import { DataTypes } from "sequelize";

const NotaModel = db.define('notas', {
    tipo: { type: DataTypes.STRING },
    numero: { type: DataTypes.STRING },
    fojas: { type: DataTypes.STRING },
    letra: { type: DataTypes.STRING },
    fecha: { type: DataTypes.STRING },
    hora: { type: DataTypes.STRING },
    firmante: { type: DataTypes.STRING },
    extracto: { type: DataTypes.STRING },
    para: { type: DataTypes.STRING },
    usuario: { type: DataTypes.STRING }
})


export default NotaModel
// importar el Modelo
import UsuarioModel from "../Models/UsuarioModel.js"
import NotaModel from "../Models/NotaModel.js"
import db from "../database/db.js";
import { QueryTypes } from "sequelize";




// metodos para el CRUD

// Clientes

// mostrar todos
// export const prueba = async (req, res) => {
//     try {
//         const projects = await db.query('SELECT * FROM inventarios', {
//             model: InvModel,
//             mapToModel: false // pass true here if you have any mapped fields
//         });
//         res.json(projects)
//         console.log(res)
//         //const resp = await InvModel.sequelize.query('Select * from Inventarios;')
//         //console.log(resp)
//         //  res.resp
//         // console.log(res)
//     } catch (e) {
//         console.log(e)
//     }
// }
export const getNotas = async (req, res) => {
    try {
        const notas = await NotaModel.findAll({
            order: [
                ["createdAt", "DESC"]
            ]
        })
        res.json(notas)
    } catch (error) {
        res.json({ message: error.message })
    }
}

// mostrar un cliente

export const getNota = async (req, res) => {
    // console.log('entro en getblog')
    try {
        const nota = await NotaModel.findAll({
            where: {
                id: req.params.id
            }
        })
        res.json(nota[0])
    } catch (error) {
        res.json({ message: error.message })
    }
}

// crear una nota

export const createNota = async (req, res) => {

   // let existe = false
    
    // try {
    //     const nota = await NotaModel.findAll({
    //         where: {
    //             numero: req.body.numero
    //         }
    //     })
               
    //     if (nota[0].dataValues.numero === req.body.numero) {
    //         existe = true
    //     }

    // } catch (error) {

    // }

    try {
        // if (existe) {
        //     req.body.numero = parseFloat(req.body.numero) + 1
        // }
        await NotaModel.create(req.body)
        res.json({ "message": 'Registro creado correctamente' })

    } catch (error) {
        res.json({ "message": error.message })
    }
}

// actualizar un cliente

export const updateNota = async (req, res) => {
    try {
        await NotaModel.update(req.body, {
            where: { id: req.params.id }
        })
        res.json({ "message": 'Registro actualizado correctamente' })
    } catch (error) {
        res.json({ message: error.message })
    }
}

// eliminar un cliente

export const deleteNota = async (req, res) => {
    try {
        await NotaModel.destroy({
            where: { id: req.params.id }
        })
        res.json({ message: 'Registro eliminado correctamente' })
    } catch (error) {
        res.json({ message: error.message })
    }
}

//  USUARIO
// crear usuario

export const createUsu = async (req, res) => {
    try {

        await UsuarioModel.create(req.body)
        res.json({ "msg": "Usuario creado correctamente", "msgError": "" })

    } catch (err) {

        const errObj = {};
        err.errors.map((e) => {
            errObj['msgError'] = e.message;
            errObj['value'] = e.value;
        })

        res.json({
            "msgError": errObj.msgError,
            "value": errObj.value
        })
    }
}

// login de usuario

export const loginUsu = async (req, res) => {
    // console.log(req.params.usuario + '   entro en login')
    try {
        const login = await UsuarioModel.findAll({
            where: {
                usuario: req.params.usuario,
            }
        });

        if (login.length === 0) {
            //  console.log('NO tiene datos')
            res.json({ ...login, "msgError": "No existe el usuario, debe darse de alta" })
        } else {
            // console.log('tiene datos')
            // console.log(login)
            res.json({ ...login, "msgError": "" })
        }
        //   console.log(res.json(login.msgError) + '   al final')

    } catch (error) {

    }
}


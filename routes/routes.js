import express from "express";
import {
    loginUsu, createUsu, getNotas, getNota, createNota, updateNota, deleteNota} from "../controllers/Controller.js";



const router = express.Router();

router.get('/notas', getNotas)
router.get('/nota/:id', getNota)
router.post('/nota/create', createNota)
router.put('/nota/:id', updateNota)
router.delete('/nota/:id', deleteNota)

router.post('/register', createUsu)
router.get('/login/:usuario', loginUsu)



export default router
import express from "express";
import { getOcorrencias, getProprietarios, addProprietarios, deleteProprietarios, updateProprietarios, getUnidades, addUnidades, updateUnidades, deleteUnidades, addGestao, updateGestao, deleteGestao, getGestao } from "../controladoras/proprietarios.js";

const rotas = express.Router();

rotas.get("/", getOcorrencias);

//Proprietarios
rotas.get("/proprietarios", getProprietarios);
rotas.post("/proprietarios", addProprietarios);
rotas.put("/proprietarios/:id", updateProprietarios);
rotas.delete("/proprietarios/:id", deleteProprietarios);

//Unidades
rotas.get("/unidades", getUnidades);
rotas.post("/unidades", addUnidades);
rotas.put("/unidades/:id", updateUnidades);
rotas.delete("/unidades/:id", deleteUnidades);

//Gestão

rotas.get("/gestao", getGestao);
rotas.post("/gestao", addGestao);
rotas.put("/gestao/:id", updateGestao);
rotas.delete("/gestao/:id", deleteGestao);


export default rotas;
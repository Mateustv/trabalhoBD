import express from "express";
import { getOcorrencias, getProprietarios, addProprietarios, deleteProprietarios, updateProprietarios } from "../controladoras/ocorrencias.js";

const rotas = express.Router();

rotas.get("/", getOcorrencias);

//Proprietarios
rotas.get("/proprietarios", getProprietarios);
rotas.post("/proprietarios", addProprietarios);
rotas.put("/proprietarios/:id", updateProprietarios);
rotas.delete("/proprietarios/:id", deleteProprietarios);

export default rotas;
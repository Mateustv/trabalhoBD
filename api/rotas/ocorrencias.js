import express from "express";
import { getOcorrencias } from "../controladoras/ocorrencias.js";

const rotas = express.Router();

rotas.get("/", getOcorrencias);

export default rotas;
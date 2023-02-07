import express from "express";
import cors from "cors";
import userRotas from "./rotas/ocorrencias.js"

const app = express();

app.use(express.json());
app.use(cors());

app.use("/", userRotas)

app.listen(8800);
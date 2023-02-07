import { db } from "../db.js";

export const getOcorrencias = (_, res) => {
    const q = "SELECT * FROM ocorrencias";

    db.query(q, (err, data) => {
        if (err) return res.json(err);

        return res.status(200).json(data);
    })
}
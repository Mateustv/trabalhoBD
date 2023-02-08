import { db } from "../db.js";

export const getOcorrencias = (_, res) => {
    const q = "SELECT *, ocorrencias.nome as quem_fez_a_denuncia FROM ocorrencias JOIN areas_comuns ON ocorrencias.id_area= areas_comuns.id_area JOIN unidades ON ocorrencias.id_unidade = unidades.id_unidade";

    db.query(q, (err, data) => {
        if (err) return res.json(err);

        return res.status(200).json(data);
    })
}

export const getProprietarios = (_, res) => {
    const q = "SELECT * from proprietarios";

    db.query(q, (err, data) => {
        if (err) return res.json(err);

        return res.status(200).json(data);
    })
}

export const addProprietarios = (req, res) => {
    const q =
        "INSERT INTO proprietarios(`cpf`, `nome`, `telefone`, `email`, `dt_nascimento` , `status`) VALUES(?)";

    const values = [
        req.body.cpf,
        req.body.nome,
        req.body.telefone,
        req.body.email,
        req.body.dt_nascimento,
        req.body.status,
    ];

    db.query(q, [values], (err) => {
        if (err) return res.json(err);

        return res.status(200).json("Usuário criado com sucesso.");
    });
};

export const updateProprietarios = (req, res) => {
    const q =
        "UPDATE proprietarios SET `CPF` = ?, `NOME` = ?, `TELEFONE` = ?, `EMAIL` = ?, `DT_NASCIMENTO` = ?, `STATUS` = ? WHERE `CPF` = ?";

    const values = [
        req.body.cpf,
        req.body.nome,
        req.body.telefone,
        req.body.email,
        req.body.dt_nascimento,
        req.body.status,
    ];
    console.log(values)
    db.query(q, [...values, req.params.id], (err) => {
        if (err)
            return res.json(err);

        return res.status(200).json("Usuário atualizado com sucesso.");
    });
};

export const deleteProprietarios = (req, res) => {
    const q = "DELETE FROM proprietarios WHERE `cpf` = ?";

    db.query(q, [req.params.id], (err) => {
        if (err) return res.json(err);

        return res.status(200).json("Usuário deletado com sucesso.");
    });
};
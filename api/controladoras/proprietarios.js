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

        return res.status(200).json("Unidade criado com sucesso.");
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

//Unidades

export const getUnidades = (_, res) => {
    const q = "SELECT * from unidades";

    db.query(q, (err, data) => {
        if (err) return res.json(err);

        return res.status(200).json(data);
    })
}

export const addUnidades = (req, res) => {
    const q =
        "INSERT INTO unidades(`id_unidade`, `cpf_proprietario`, `bloco`, `numero`, `num_vaga` , `placa_veiuclo`) VALUES(?)";

    const values = [
        req.body.id_unidade,
        req.body.cpf_proprietario,
        req.body.bloco,
        req.body.numero,
        req.body.num_vaga,
        req.body.placa_veiuclo,
    ];

    db.query(q, [values], (err) => {
        if (err) return res.json(err);

        return res.status(200).json("Unidade criada com sucesso.");
    });
};

export const updateUnidades = (req, res) => {
    const q =
        "UPDATE unidades SET `id_unidade` = ?, `cpf_proprietario` = ?, `bloco` = ?, `numero` = ?, `num_vaga` = ?, `placa_veiuclo` = ? WHERE `id_unidade` = ?";

    const values = [
        req.body.id_unidade,
        req.body.cpf_proprietario,
        req.body.bloco,
        req.body.numero,
        req.body.num_vaga,
        req.body.placa_veiuclo,
    ];
    console.log(values)
    db.query(q, [...values, req.params.id], (err) => {
        if (err)
            return res.json(err);

        return res.status(200).json("Unidade atualizada com sucesso.");
    });
};

export const deleteUnidades = (req, res) => {
    const q = "DELETE FROM unidades WHERE `id_unidade` = ?";

    db.query(q, [req.params.id], (err) => {
        if (err) return res.json(err);

        return res.status(200).json("Unidade deletada com sucesso.");
    });
};
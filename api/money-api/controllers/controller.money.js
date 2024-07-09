import modelMoney from "../models/model.money.js";

const Listar = (req, res) => {
    modelMoney.Listar((err, result) => {
        if (err) {
            console.log(err);
            res.status(400).send('Deu Ruim');
        } else {
            res.status(200).json(result);
        }
    });
};

const Inserir = (req, res) => {
    const { assunto, descricao, valor } = req.body;
    if (!assunto || !descricao || !valor) {
        res.status(400).send('Dados incompletos');
        return;
    }

    modelMoney.Inserir({ assunto, descricao, valor }, (err, result) => {
        if (err) {
            console.log(err);
            res.status(400).send('Deu Ruim');
        } else {
            res.status(200).send('Deu bom');
        }
    });
};

const Editar = (req, res) => {
    const { id, assunto, descricao, valor } = req.body;
    if (!id || !assunto || !descricao || !valor) {
        res.status(400).send('Dados incompletos');
        return;
    }

    modelMoney.Editar({ id, assunto, descricao, valor }, (err, result) => {
        if (err) {
            console.log(err);
            res.status(400).send('Deu Ruim');
        } else {
            res.status(200).send('Deu bom');
        }
    });
};

const Deletar = (req, res) => {
    const { id } = req.body;
    if (!id) {
        res.status(400).send('Dados incompletos');
        return;
    }

    modelMoney.Apagar({ id }, (err, result) => {
        if (err) {
            console.log(err);
            res.status(400).send('Deu Ruim');
        } else {
            res.status(200).send('Deu bom');
        }
    });
};

export default { Listar, Inserir, Editar, Deletar };


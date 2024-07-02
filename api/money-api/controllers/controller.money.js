import modelMoney from "../models/model.money.js"

const Listar = (req, res) => {
    modelMoney.Listar((err, result) => {
        if (err) {
            console.log(err)
            res.status(400).send('Deu Ruim')
        } else {
            res.status(200).json(result)
        }
    })
}

const Inserir = (req, res) => {
    modelMoney.Inserir(req.query, (err, result))
    if (err) {
        console.log(err)
        res.status(400).send('Deu Ruim')
    } else {
        res.status(200).send('Deu bom')
    }
}

const Editar = (req, res) => {
    modelMoney.Editar(req.query, (err, result))
    if (err) {
        console.log(err)
        res.status(400).send('Deu Ruim')
    } else {
        res.status(200).send('Deu bom')
    }
}

const Deletar = (req, res) => {
    modelMoney.Apagar(req.query, (err, result))
    if (err) {
        console.log(err)
        res.status(400).send('Deu Ruim')
    } else {
        res.status(200).send('Deu bom')
    }
}

export default { Listar, Inserir, Editar, Deletar }
import modelMoney from "../models/model.money.js"

const Listar = (req, res) => {
    modelMoney.Listar((err, result))
    if (err) {
        console.log(err)
        res.status(400).send('Deu Ruim')
    } else {
        res.status(200).send('Deu bom')
    }
}

const Inserir = (req, res) => {
    modelMoney.Inserir((err, result))
    if (err) {
        console.log(err)
        res.status(400).send('Deu Ruim')
    } else {
        res.status(200).send('Deu bom')
    }
}

const Editar = (req, res) => {
    modelMoney.Editar((err, result))
    if (err) {
        console.log(err)
        res.status(400).send('Deu Ruim')
    } else {
        res.status(200).send('Deu bom')
    }
}

const Deletar = (req, res) => {
    modelMoney.Apagar((err, result))
    if (err) {
        console.log(err)
        res.status(400).send('Deu Ruim')
    } else {
        res.status(200).send('Deu bom')
    }
}

export default { Listar, Inserir, Editar, Deletar }
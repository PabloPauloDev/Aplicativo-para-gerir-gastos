import mysql from 'mysql'
import dbConfig from '../config/database.js'

const Listar = () => {
    const db = mysql.createConnection(dbConfig)
    db.connect((err) => {
        if (err) throw err
    })
    db.end((err) => {
        if (err) throw err
    })
}
const Inserir = () => {
    const db = mysql.createConnection(dbConfig)
    db.connect((err) => {
        if (err) throw err
    })
    db.end((err) => {
        if (err) throw err
    })

}
const Editar = () => {
    const db = mysql.createConnection(dbConfig)
    db.connect((err) => {
        if (err) throw err
    })
    db.end((err) => {
        if (err) throw err
    })

}
const Apagar = () => {
    const db = mysql.createConnection(dbConfig)
    db.connect((err) => {
        if (err) throw err
    })
    db.end((err) => {
        if (err) throw err
    })

}

export default { Listar, Inserir, Editar, Apagar }
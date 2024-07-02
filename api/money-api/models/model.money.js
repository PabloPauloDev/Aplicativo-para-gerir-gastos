import mysql from 'mysql'
import config from '../config/database.js'

const Listar = (callback) => {
    const db = mysql.createConnection(config)
    db.connect((err) => {
        if (err) throw err
        console.log('Conectado ao banco de dados MySQL!')
        db.query('SELECT * FROM gastos', (err, results) => {
            if (err) throw err
            callback(null, results)
            db.end((err) => {
                if (err) throw err
            })
        })
    })
}

const Inserir = (data, callback) => {
    const db = mysql.createConnection(config)
    db.connect((err) => {
        if (err) throw err
        const sql = 'INSERT INTO gastos (assunto, descricao, valor) VALUES (?, ?, ?)'
        db.query(sql, [data.assunto, data.descricao, data.valor], (err, results) => {
            if (err) throw err
            console.log('Inserted:', results)
            db.end((err) => {
                if (err) throw err
            })
        })
    })
}

const Editar = (id, data, callback) => {
    const db = mysql.createConnection(config)
    db.connect((err) => {
        if (err) throw err
        const sql = 'UPDATE gastos SET assunto = ?, descricao = ?, valor = ?, WHERE id = ?'
        db.query(sql, [data.assunto, data.descricao, data.valor, data.id], (err, results) => {
            if (err) throw err
            console.log('Updated:', results)
            db.end((err) => {
                if (err) throw err
            })
        })
    })
}

const Apagar = (data, callback) => {
    const db = mysql.createConnection(config)
    db.connect((err) => {
        if (err) throw err
        const sql = 'DELETE FROM gastos WHERE id = ?'
        db.query(sql, [data.id], (err, results) => {
            if (err) throw err
            console.log('Deleted:', results)
            db.end((err) => {
                if (err) throw err
            })
        })
    })
}

export default { Listar, Inserir, Editar, Apagar }

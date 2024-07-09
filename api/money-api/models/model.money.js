import mysql from 'mysql';
import config from '../config/database.js';

const Listar = (callback) => {
    const db = mysql.createConnection(config);
    db.connect((err) => {
        if (err) return callback(err, null);
        console.log('Conectado ao banco de dados MySQL!');
        db.query('SELECT * FROM gastos', (err, results) => {
            if (err) return callback(err, null);
            callback(null, results);
            db.end((err) => {
                if (err) console.log(err);
            });
        });
    });
};

const Inserir = (data, callback) => {
    const db = mysql.createConnection(config);
    db.connect((err) => {
        if (err) return callback(err, null);
        const sql = 'INSERT INTO gastos (assunto, descricao, valor) VALUES (?, ?, ?)';
        db.query(sql, [data.assunto, data.descricao, data.valor], (err, results) => {
            if (err) return callback(err, null);
            callback(null, results);
            db.end((err) => {
                if (err) console.log(err);
            });
        });
    });
};

const Editar = (data, callback) => {
    const db = mysql.createConnection(config);
    db.connect((err) => {
        if (err) return callback(err, null);
        const sql = 'UPDATE gastos SET assunto = ?, descricao = ?, valor = ? WHERE id = ?';
        db.query(sql, [data.assunto, data.descricao, data.valor, data.id], (err, results) => {
            if (err) return callback(err, null);
            callback(null, results);
            db.end((err) => {
                if (err) console.log(err);
            });
        });
    });
};

const Apagar = (data, callback) => {
    const db = mysql.createConnection(config);
    db.connect((err) => {
        if (err) return callback(err, null);
        const sql = 'DELETE FROM gastos WHERE id = ?';
        db.query(sql, [data.id], (err, results) => {
            if (err) return callback(err, null);
            callback(null, results);
            db.end((err) => {
                if (err) console.log(err);
            });
        });
    });
};

export default { Listar, Inserir, Editar, Apagar };


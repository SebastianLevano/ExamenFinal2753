const db = require('../db');

const Customer = {
    create: (data, callback) => {
        const sql = 'INSERT INTO customers (name, email, phone, address) VALUES (?, ?, ?, ?)';
        db.query(sql, [data.name, data.email, data.phone, data.address], callback);
    },
    findById: (id, callback) => {
        const sql = 'SELECT * FROM customers WHERE id = ?';
        db.query(sql, [id], callback);
    },
    update: (id, data, callback) => {
        const sql = 'UPDATE customers SET name = ?, email = ?, phone = ?, address = ? WHERE id = ?';
        db.query(sql, [data.name, data.email, data.phone, data.address, id], callback);
    },
    delete: (id, callback) => {
        const sql = 'DELETE FROM customers WHERE id = ?';
        db.query(sql, [id], callback);
    }
};

module.exports = Customer;
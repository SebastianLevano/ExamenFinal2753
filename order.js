const db = require('../db');

const Order = {
    create: (data, callback) => {
        const sql = 'INSERT INTO orders (customer_id, products, total, status) VALUES (?, ?, ?, ?)';
        db.query(sql, [data.customer_id, JSON.stringify(data.products), data.total, 'pendiente'], callback);
    },
    findById: (id, callback) => {
        const sql = 'SELECT * FROM orders WHERE id = ?';
        db.query(sql, [id], callback);
    },
    updateStatus: (id, status, callback) => {
        const sql = 'UPDATE orders SET status = ? WHERE id = ?';
        db.query(sql, [status, id], callback);
    },
    delete: (id, callback) => {
        const sql = 'DELETE FROM orders WHERE id = ?';
        db.query(sql, [id], callback);
    }
};

module.exports = Order;

const db = require('../db');

const Product = {
    create: (data, callback) => {
        const sql = 'INSERT INTO products (name, description, price, stock, category) VALUES (?, ?, ?, ?, ?)';
        db.query(sql, [data.name, data.description, data.price, data.stock, data.category], callback);
    },
    findById: (id, callback) => {
        const sql = 'SELECT * FROM products WHERE id = ?';
        db.query(sql, [id], callback);
    },
    update: (id, data, callback) => {
        const sql = 'UPDATE products SET name = ?, description = ?, price = ?, stock = ?, category = ? WHERE id = ?';
        db.query(sql, [data.name, data.description, data.price, data.stock, data.category, id], callback);
    },
    delete: (id, callback) => {
        const sql = 'DELETE FROM products WHERE id = ?';
        db.query(sql, [id], callback);
    }
};

module.exports = Product;
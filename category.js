const db = require('../db');

const Category = {
    create: (data, callback) => {
        const sql = 'INSERT INTO categories (name, description) VALUES (?, ?)';
        db.query(sql, [data.name, data.description], callback);
    },
    findAll: (callback) => {
        const sql = 'SELECT * FROM categories';
        db.query(sql, callback);
    },
    update: (id, data, callback) => {
        const sql = 'UPDATE categories SET name = ?, description = ? WHERE id = ?';
        db.query(sql, [data.name, data.description, id], callback);
    },
    delete: (id, callback) => {
        const sql = 'DELETE FROM categories WHERE id = ?';
        db.query(sql, [id], callback);
    }
};

module.exports = Category;
const express = require('express');
const router = express.Router();
const Category = require('../models/category');

// Crear una nueva categoría
router.post('/', (req, res) => {
    Category.create(req.body, (err, results) => {
        if (err) return res.status(500).send(err);
        res.status(201).send({ id: results.insertId });
    });
});

// Obtener todas las categorías
router.get('/', (req, res) => {
    Category.findAll((err, results) => {
        if (err) return res.status(500).send(err);
        res.send(results);
    });
});

// Actualizar una categoría
router.put('/:id', (req, res) => {
    Category.update(req.params.id, req.body, (err) => {
        if (err) return res.status(500).send(err);
        res.send({ message: 'Category updated' });
    });
});

// Eliminar una categoría
router.delete('/:id', (req, res) => {
    Category.delete(req.params.id, (err) => {
        if (err) return res.status(500).send(err);
        res.send({ message: 'Category deleted' });
    });
});

module.exports = router;
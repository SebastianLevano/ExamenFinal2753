const express = require('express');
const router = express.Router();
const Product = require('../models/product');

// Crear un producto nuevo
router.post('/', (req, res) => {
    Product.create(req.body, (err, results) => {
        if (err) return res.status(500).send(err);
        res.status(201).send({ id: results.insertId });
    });
});

// Obtener detalles de un producto
router.get('/:id', (req, res) => {
    Product.findById(req.params.id, (err, results) => {
        if (err) return res.status(500).send(err);
        if (results.length === 0) return res.status(404).send({ message: 'Product not found' });
        res.send(results[0]);
    });
});

// Actualizar un producto existente
router.put('/:id', (req, res) => {
    Product.update(req.params.id, req.body, (err) => {
        if (err) return res.status(500).send(err);
        res.send({ message: 'Product updated' });
    });
});

// Eliminar un producto
router.delete('/:id', (req, res) => {
    Product.delete(req.params.id, (err) => {
        if (err) return res.status(500).send(err);
        res.send({ message: 'Product deleted' });
    });
});

module.exports = router;
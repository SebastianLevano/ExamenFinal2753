const express = require('express');
const router = express.Router();
const Customer = require('../models/customer');

// Crear un cliente nuevo
router.post('/', (req, res) => {
    Customer.create(req.body, (err, results) => {
        if (err) return res.status(500).send(err);
        res.status(201).send({ id: results.insertId });
    });
});

// Obtener detalles de un cliente
router.get('/:id', (req, res) => {
    Customer.findById(req.params.id, (err, results) => {
        if (err) return res.status(500).send(err);
        if (results.length === 0) return res.status(404).send({ message: 'Customer not found' });
        res.send(results[0]);
    });
});

// Actualizar un cliente existente
router.put('/:id', (req, res) => {
    Customer.update(req.params.id, req.body, (err) => {
        if (err) return res.status(500).send(err);
        res.send({ message: 'Customer updated' });
    });
});

// Eliminar un cliente
router.delete('/:id', (req, res) => {
    Customer.delete(req.params.id, (err) => {
        if (err) return res.status(500).send(err);
        res.send({ message: 'Customer deleted' });
    });
});

module.exports = router;
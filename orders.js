const express = require('express');
const router = express.Router();
const Order = require('../models/order');

// Crear una nueva orden
router.post('/', (req, res) => {
    Order.create(req.body, (err, results) => {
        if (err) return res.status(500).send(err);
        res.status(201).send({ id: results.insertId });
    });
});

// Obtener detalles de una orden
router.get('/:id', (req, res) => {
    Order.findById(req.params.id, (err, results) => {
        if (err) return res.status(500).send(err);
        if (results.length === 0) return res.status(404).send({ message: 'Order not found' });
        res.send(results[0]);
    });
});

// Actualizar el estado de una orden
router.put('/:id/status', (req, res) => {
    Order.updateStatus(req.params.id, req.body.status, (err) => {
        if (err) return res.status(500).send(err);
        res.send({ message: 'Order status updated' });
    });
});

// Eliminar una orden
router.delete('/:id', (req, res) => {
    Order.delete(req.params.id, (err) => {
        if (err) return res.status(500).send(err);
        res.send({ message: 'Order deleted' });
    });
});

module.exports = router;
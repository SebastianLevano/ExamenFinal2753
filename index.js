const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;
const productRoutes = require('./routes/products');
const customerRoutes = require('./routes/customers');
const orderRoutes = require('./routes/orders');
const categoryRoutes = require('./routes/categories');

app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('Welcome to TechStore API');
});

app.listen(port, () => {
    console.log(`TechStore API running on http://localhost:${port}`);
});

app.use('/products', productRoutes);
app.use('/customers', customerRoutes);

app.use('/orders', orderRoutes);

app.use('/categories', categoryRoutes);

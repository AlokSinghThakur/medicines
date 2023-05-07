const express = require('express');
const app = express();

app.use(express.json());

const models = require('./models');

const MEDICINE_ROUTES = require('./routes/medicine')
const INVENTORY_ROUTES = require('./routes/inventory')

app.use('/medicine', MEDICINE_ROUTES);
app.use('/inventory', INVENTORY_ROUTES)


models.db_config
    .sync({
        // force: true,
        // alter: true,
    })
    .then(() => {
        console.log(`Connected to Database!`);
    })
    .catch(err => {
        console.log('Could not connect to the database. Exiting now...', err)
        process.exit()
    });


app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000')
})

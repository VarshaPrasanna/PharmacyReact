const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
var cors = require('cors');

/* configure body-parser */
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use(cors());


const { auth_route, user_route, product_route, cart_route, order_route, prescription_route, discussionBoard_route } = require('./app/routes/');

app.use('/auth', auth_route);
app.use('/users', user_route);
app.use('/products', product_route);
app.use('/carts', cart_route);
app.use('/orders', order_route);
app.use('/message', discussionBoard_route);
app.use('/prescription', prescription_route);
const dbConfig = require('./config/database.config.js');

/* connecting to the database */
mongoose.connect(dbConfig.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => {
        console.log("Successfully connected to the database");
    }).catch(err => {
        console.log('Could not connect to the database. Exiting now...', err);
        process.exit();
    });

app.post("/members", cors(), (req, res) => {
    console.log(req.body);
    res.status(200).send({ "message": "data received" });
});

/* listen for requests */
app.listen(3000, () => {
    console.log("Server is listening on port 3000");
});




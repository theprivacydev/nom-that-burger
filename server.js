const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');

const app = express();

// Define PORT
const PORT = process.env.PORT || 8080;


app.use(express.static(__dirname + '/public'));

// Middleware to parse json
app.use(express.urlencoded({extended: true}));
app.use(express.json());

// Set handlebars as template engine
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

// Import routes
const routes = require('./controllers/burger_Controller.js');
app.use(routes);





// Start server for listening for client requests
app.listen(PORT, () => {
    console.log(`Server is listening on http://localhost:${PORT}`);
});
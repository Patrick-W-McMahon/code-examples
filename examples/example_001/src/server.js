'use strict';
const path = require('path');
const express = require('express'),
    app = express(),
    mongoose = require('mongoose'),
    bodyParser = require('body-parser');

const config = require('./config');
const port = process.env.PORT || config.port;
const LogRoutes = require('./routes/logRoutes');
LogRoutes.forEach(route => app.use(route.path, route.controller));


mongoose.connect(`mongodb+srv://${config.database.user}:${config.database.password}@cluster0-r1cj0.mongodb.net/test?retryWrites=true`, { useNewUrlParser: true });
const server = app.listen(port, () => console.log(`Express server listening on port ${port}`));

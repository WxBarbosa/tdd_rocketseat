const express = require('express');
const routes = require('./routes')

class AppController {
    constructor() {
        this.express = express();
        this.middlewares();
        this.routes();
    }

    middlewares(){
        this.express.use(express.json());
    }

    routes(){
        this.express.route(routes)
    }
}

module.exports = new AppController().express;
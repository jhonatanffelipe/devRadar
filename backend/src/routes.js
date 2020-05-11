//A chave é utilizada apenas para importar o routes dos express e não todo o express
const { Router } = require('express');
const DevController = require('./controllers/DevController');
const SearchController = require('./controllers/SearchController');


const routes = Router();

routes.get('/devs', DevController.index);
routes.post('/devs', DevController.store);

routes.get('/search', SearchController.index);

module.exports = routes;
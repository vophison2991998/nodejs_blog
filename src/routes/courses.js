const express = require('express');
const route = express.Router();
const coursecontroller = require('../app/controllers/coursecontroller');
route.get('/create', coursecontroller.create);
route.post('/store', coursecontroller.store);
route.get('/:id/edit', coursecontroller.edit);

route.post('/handle-form-actions', coursecontroller.handleFormAcitons);


route.put('/:id', coursecontroller.update);
route.patch('/:id/restore', coursecontroller.restore);

route.delete('/:id', coursecontroller.delete);
route.delete('/:id/force', coursecontroller.forceDestroy);

route.get('/:slug', coursecontroller.show);



module.exports = route;
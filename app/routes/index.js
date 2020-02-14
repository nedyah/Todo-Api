const todosController = require('../../controllers').todos;
const todoItemsController = require('../../controllers').todoItems;

module.exports = (app) => {
    app.get('/api', (req, res) => res.status(200).send({
        message: 'What do you need to do?',
    }));

    app.post('/api/todos', todosController.create);
    app.post('/api/todos/:todoId/items', todoItemsController.create);
    app.get('/api/todos/:todoId', todosController.retrieve);
    app.get('/api/todos', todosController.list);
};
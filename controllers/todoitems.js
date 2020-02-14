const TodoItem = require('../models').todoItem;


module.exports = {
    create(req, res) {
        return TodoItem
        .create({
            content: req.body.content,
            todoId: req.params.todoId,
        })
        .then(TodoItem => res.status(201).send(TodoItem))
        .catch(error => res.status(400).send(error));
    },
};
const Todo = require('../models').todo;
const todoItem = require('../models').todoItems;

module.exports = {
    create(req, res) {
        return Todo
        .create({
            title: req.body.title,
        })
        .then(todo => res.status(201).send(todo))
        .catch(error => res.status(400).send(error));
    },
    list(req, res) {
        return Todo
        .all()
        .then(todo => res.status(200).send(todo))
        .catch(error => res.status(400).send(error));
    },
    retrieve(req, res) {
        return Todo
            .findById(req.params.todoId, {
            include: [{
                model: todoItem,
                as: 'todoItems',
            }],
        })
        .then(todo => {
            if (!todo) {
                return res.status(404).send({
                    message: 'Todo not found',
                });
            }
            return res.status(200).send(todo);
        })
        .catch(error => res.status(400).send(error));
    },
};
const Todo = require('../models').todo;
const todoItems = require('../models').todoitem;

module.exports = {
    create(req, res) {
        return Todo
        .create({
            title: req.body.title,
        })
        .then(todo => res.status(201).send(todo))
        .catch(error => res.status(400).send(error));
    },
    /*list(req, res) {
        return Todo
        .findAll()
        .then(todo => res.status(200).send(todo))
        .catch(error => res.status(400).send(error));
    },*/
    list(req, res) {
        return Todo
          .findAll({
            include: [{
              model: todoItems,
              as: 'todoItems',
            }],
          })
          .then(todos => res.status(200).send(todos))
          .catch(error => res.status(400).send(error));
      },
      update(req, res) {
          console.log(req.body.title + " " + req.params.todoId)
        return Todo
          .findByPk(req.params.todoId, {
            include: [{
              model: todoItems,
              as: 'todoItems',
            }],
          })
          .then(todo => {
            if (!todo) {
              return res.status(404).send({
                message: 'Todo Not Found',
              });
            }
            return todo
              .update({
                title: req.body.title || todo.title,
              })
              .then(() => res.status(200).send(todo))  // Send back the updated todo.
              .catch((error) => res.status(400).send(error));
          })
          .catch((error) => res.status(400).send(error));
      },
     
};

module.exports = (sequelize, DataTypes) => {
  const Todo = sequelize.define('todo', {
    title: DataTypes.STRING,
    allowNull: false,
  }, {});
  Todo.associate = (models) => {
    
    Todo.hasMany(models.todoItem, {
      foreginKey: 'todoId',
      as: 'todoItems'
    })
  };
  return Todo;
};
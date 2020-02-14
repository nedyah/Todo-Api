
module.exports = (sequelize, DataTypes) => {
  const todoItem = sequelize.define('todoItem', {
    content:  {
      type: DataTypes.STRING,
      allowNull: false,
    },
    complete: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    } 
  }, {});
  todoItem.associate = (models) => {
    todoItem.belongsTo(models.todo, {
      foreignKey: 'todoId',
      onDelete: 'CASCADE',
    })
  };
  return todoItem;
};
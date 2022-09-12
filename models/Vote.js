const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Vote extends Model {}

Vote.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    //how will this connect the User and Post models? 
    //Think about what we added to the Post model to indicate ownership by the User model: 
    //we added a user_id field that would hold the primary key value of a user. 
    //Let's do the same thing here, but now we'll include the post's id as well
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'user',
          key: 'id'
        }
      },
      post_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'post',
          key: 'id'
        }
      }
    },
    {
      sequelize,
      timestamps: false,
      freezeTableName: true,
      underscored: true,
      modelName: 'vote'
    }
  );

module.exports = Vote;
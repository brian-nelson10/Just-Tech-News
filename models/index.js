const User = require('./User');
const Post = require("./Post");

// create associations (one to many relationship)
User.hasMany(Post, {
    foreignKey: 'user_id'
  });

// reverse association 
//In this statement, we are defining the relationship of the Post model to the User. 
//The constraint we impose here is that a post can belong to one user, but not many users.
//Again, we declare the link to the foreign key, which is designated at user_id in the Post model
Post.belongsTo(User, {
    foreignKey: 'user_id',
  });

module.exports = { User, Post };
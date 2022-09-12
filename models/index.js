const User = require('./User');
const Post = require("./Post");
const Vote = require('./Vote');

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

  //With these two .belongsToMany() methods in place, 
  //we're allowing both the User and Post models to query each other's information in the context of a vote. 
  //If we want to see which users voted on a single post, we can now do that. 
  //If we want to see which posts a single user voted on, we can see that too.
  //We instruct the application that the User and Post models will be connected, but in this case through the Vote model. 
  //We state what we want the foreign key to be in Vote, which aligns with the fields we set up in the model. 
  //We also stipulate that the name of the Vote model should be displayed as voted_posts when queried on, making it a little more informative.

  User.belongsToMany(Post, {
    through: Vote,
    as: 'voted_posts',
    foreignKey: 'user_id'
  });
  
  Post.belongsToMany(User, {
    through: Vote,
    as: 'voted_posts',
    foreignKey: 'post_id'
  });

  //Directly connecting user and vote
  Vote.belongsTo(User, {
    foreignKey: 'user_id'
  });
  
  Vote.belongsTo(Post, {
    foreignKey: 'post_id'
  });
  
  User.hasMany(Vote, {
    foreignKey: 'user_id'
  });
  
  Post.hasMany(Vote, {
    foreignKey: 'post_id'
  });

module.exports = { User, Post, Vote };
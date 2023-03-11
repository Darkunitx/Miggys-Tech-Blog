const User = require('./User');
const Posts = require('./Post');
const Comment = require('./Comment');

Posts.belongsTo(User, {
    foreignKey: 'user_id'
});

Posts.hasMany(Comment, {
    foreignKey: 'post_id',
    onDelete: 'CASCADE'
});

Comment.belongsTo(User, {
    foreignKey: 'user_id',
});


module.exports = { User, Posts, Comment };

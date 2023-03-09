const User = require('./user');
const Posts = require('./post');
const Comments = require('./comment');

User.hasMany(Posts, {
    foreignKey: 'user_id'
});

Posts.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

User.hasMany(Comments, {
    foreignKey: 'user_id'
});

Comments.belongsTo(User, {
    foreignKey: 'user_id',
});

Posts.hasMany(Comments, {
    foreignKey: 'post_id',
    onDelete: 'CASCADE'
});

// Comments.hasOne(Posts, {
//     foreignKey: 'post_id'
// });

Comments.belongsTo(Posts, {
    foreignKey: 'post_id',
});


module.exports = { User, Posts, Comments };

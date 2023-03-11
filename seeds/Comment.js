const { Comment } = require('../models');

const commentData = [
    {
        content: '1st comment',
        user_id: 1,
        post_id: 1,
    },
    {
        content: '2nd comment',
        user_id: 2,
        post_id: 2,
    },
    {
        content: '3rd comment',
        user_id: 3,
        post_id: 3,
    },
];

const seededComments = () => Comment.bulkCreate(commentData);

module.exports = seededComments;
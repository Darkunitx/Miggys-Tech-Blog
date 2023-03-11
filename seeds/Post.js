const { Post } = require('../models');

const postData = [
    {
        title: 'first post',
        content: 'first content',
        user_id: 1,
    },
    {
        title: 'second post',
        content: 'second content',
        user_id: 2,
    },
    {
        title: 'third post',
        content: 'third content',
        user_id: 3,
    },
];

const seededPosts = () => Post.bulkCreate(postData);

module.exports = seededPosts;
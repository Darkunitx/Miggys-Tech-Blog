const { User } = require('../models');

const userData = [
    {
        name: 'yes',
        password: 'yes',
    },
    {
        name: 'no',
        password: 'no',
    },
    {
        name: 'maybe',
        password: 'maybe',
    },
];

const seededUsers = () => User.bulkCreate(userData);

module.exports = seededUsers;
const seededUsers = require('./User');
const seededPosts = require('./Post');
const seededComments = require('./Comment');

const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');

  await seededUsers();
  console.log('\n----- USERS SEEDED -----\n');

  await seededPosts();
  console.log('\n----- POSTS SEEDED -----\n');

  await seededComments();
  console.log('\n----- COMMENTS SEEDED -----\n');

  process.exit(0);
};

seedAll();

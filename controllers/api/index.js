const router = require('express').Router();
const commentRoutes = require('./commentroutes');
const postRoutes = require('./postroutes');
const userRoutes = require('./userroutes');

router.use('/comments', commentRoutes);
router.use('/posts', postRoutes);
router.use('/users', userRoutes);

module.exports = router;
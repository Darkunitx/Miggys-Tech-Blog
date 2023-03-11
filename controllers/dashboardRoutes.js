const router = require('express').Router();
const { User, Post } = require('../models');
const withAuth = require('../utils/auth');


router.get('/', async (req, res) => {
    try {
        const postData = await Post.findAll({
            where: { user_id: req.session.user_id },
            attributes: ["id", "title", "content", "date_created"],
            include: [{
                model: User,
                attributes: ["name"]
            }]
        });
        const posts = postData.map((post) => post.get({ plain: true }));
        res.render('newpost', {
            layout: "main",
            posts,
            loggedin: req.session.loggedin
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

router.post('post', withAuth, async (req, res) => {
    try {
        const postData = await Post.create({
            title: req.body.title,
            content: req.body.content,
            user_id: req.session.user_id,
        });
        res.status(200).json(postData);
    } catch (err) {
        res.status(400).json(err);
    }
});


router.put('/post/:id', withAuth, async (req, res) => {
    try {
        const postData = await Post.update(
            {
                title: req.body.title,
                content: req.body.content,
            },
            {
                where: {
                    id: req.params.id,
                },
            }
        );
        res.status(200).json(postData);
    } catch (err) {
        res.status(400).json(err);
    }
});

router.delete('/post/:id', withAuth, async (req, res) => {
    try {
        const postData = await Post.destroy({
            where: {
                id: req.params.id,
            },
        });
        res.status(200).json(postData);
    } catch (err) {
        res.status(400).json(err);
    }
});

router.get('/post/:id', withAuth, async (req, res) => {
    try {
        const postData = await Post.findByPk(req.params.id, {
            include: [
                {
                    model: User,
                    attributes: ['name'],
                },
            ],
        });

        const post = postData.get({ plain: true });
        res.render('post', {
            ...post,
            loggedin: req.session.loggedin
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;
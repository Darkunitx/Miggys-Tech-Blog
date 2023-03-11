const router = require('express').Router();
const { Post, User, Comment } = require('../models');

router.get('/login', async (req, res) => {
    if (req.session.logged_in) {
        res.redirect('/');
        return;
    }
    res.render('login');
});

router.get('/', async (req, res) => {
    try {
        const postData = await Post.findAll({
            include: [
                {
                    model: User,
                    attributes: ['name'],
                }]
        });

        const posts = postData.map((post) => post.get({ plain: true }));
        console.log(posts);
        res.render("homepage", {
            posts,
            loggedin: req.session.loggedin
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get("/post/:id", async (req, res) => {
    try {
        const postData = await Post.findByPk(req.params.id, {
            include: [
                {
                    model: User,
                    attributes: ["name"],
                }, {
                    model: Comment,
                    include: {
                        model: User,
                        attributes: ["name"],
                    }
                },
            ],
        });

        const post = postData.get({ plain: true });
        res.render("post", {
            post,
            loggedin: req.session.loggedin
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;
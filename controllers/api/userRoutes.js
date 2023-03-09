const router = require('express').Router();
const { User } = require('../../models');

router.post('/', async (req, res) => {
    console.log("Request Body : ", req.body);
    
    try {
        const userData = await User.create({
            name: req.body.name,
            password: req.body.password
        });
        
        console.log("User Data : ", userData);
        
        req.session.save(() => {
            req.session.user_id = userData.id;
            req.session.loggedIn = true;
            
            res.status(200).json(userData);
        });
    } catch (err) {
        res.status(400).json(err);
    }
});

router.post('/login', async (req, res) => {
    console.log("Request Body : ", req.body);

    try {
        const userData = await User.findOne({ where: { name: req.body.name } });

        // verify we found a user
        //console.log("User: ", userData);
        
        if (!userData) {
            res
                .status(400)
                .json({ message: 'Incorrect username, please try again!' });
            return;
        }

        const validPassword = await userData.checkPassword(req.body.password);

        if (!validPassword) {
            res
                .status(400)
                .json({ message: 'Incorrect password, please try again' });
            return;
        }

        req.session.save(() => {
            req.session.user_id = userData.id;
            req.session.logged_in = true;

            res
                .status(200)
                .json({ user: userData, message: 'You are now logged in!' });
        });

    } catch (err) {
        res.status(400).json(err);
    }
});

router.post('/logout', async (req, res) => {
    if (req.session.logged_in) {
        req.session.destroy(() => {
            res.status(204).end();
        });
    } else {
        res.status(404).end();
    }
});

module.exports = router;

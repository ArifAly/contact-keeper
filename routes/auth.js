const  express =require ('express');
const res = require('express/lib/response');
const router = express.Router();

//@route             GET/api/auth
//@description       Get logged in user
//@acces             Private

router.get('/', (req, res) => {
    res.send('get all the logged in user')
});


//@route             POST/api/auth
//@description       auth user and get token
//@acces             Public

router.post('/', (req, res) => {
    res.send('login user')
});



module.exports = router; 
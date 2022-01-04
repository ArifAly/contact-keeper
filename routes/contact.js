const  express =require ('express');
const res = require('express/lib/response');
const router = express.Router();

//@route             GET/api/contacts
//@description       GET all users contact
//@acces             Private

router.get('/', (req, res) => {
    res.send('Get all contacts')
});


//@route             POST/api/contacts
//@description       Add new contact
//@acces             Private

router.post('/', (req, res) => {
    res.send('Add contact')
});


//@route             PUT/api/contacts/:id
//@description       Update contact
//@acces             Private

router.put('/:id', (req, res) => {
    res.send('Update contact')
});

//@route             DELETE/api/contacts/:id
//@description       Delete contact
//@acces             Private

router.delete('/:id', (req, res) => {
    res.send('Delete contact')
});

module.exports = router; 
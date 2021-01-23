const router = require('express').Router();

const {
    getAllContacts,
    getSingleContact,
    createContact,
    updateContact,
    deleteContact
} = require('./controllers');

router.get('/', getAllContacts)
router.get('/:id', getSingleContact)
router.post('/', createContact)
router.put('/:id', updateContact)
router.delete('/:id', deleteContact)

module.exports = router
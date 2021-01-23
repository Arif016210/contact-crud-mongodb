const Contact = require('./Contacts');

exports.getAllContacts = (req, res) => {
    Contact.find()
        .then(contacts => {
            res.json(contacts);
        })
        .catch(e => {
            console.log(e)
            res.json({
                message: 'Server Error!!!'
            })
        })
}
exports.getSingleContact = (req, res) => {
    const { id } = req.params
    Contact.findById(id)
        .then(contact => {
            res.json(contact)
        })
        .catch(e => {
            console.log(e)
            res.json({
                message: 'Server Error!!!'
            })
        })
}
exports.createContact = (req, res) => {
    let { name, email, phone } = req.body;

    const contact = new Contact({
        name,
        email,
        phone
    })
    // console.log(contact)
    // res.json({
    //     message: 'Something'
    // })

    contact.save()
        .then(c => {
            res.json(c)
        })
        .catch(e => {
            console.log(e);
            res.json({
                message: 'Server Error!!!'
            })
        })

}
exports.updateContact = (req, res) => {
    let { name, email, phone } = req.body
    let { id } = req.params
    Contact.findOneAndUpdate(
        { _id: id },
        {
            $set: {
                name,
                email,
                phone
            }
        }, { new: true }
    )
        .then(contact => {
            res.json(contact)
        })
        .catch(e => {
            console.log(e);
            res.json({
                message: 'Server Error!!!'
            })
        })

}
exports.deleteContact = (req, res) => {
    const { id } = req.params
    Contact.findOneAndDelete({ _id: id })
        .then(() => {
            res.json({
                message: 'Contact deleted!!!'
            })
        })
        .catch(e => {
            console.log(e);
            res.json({
                message: 'Server Error!!!'
            })
        })
}
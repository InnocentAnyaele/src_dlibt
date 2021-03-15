const Message = require('../models/Message')

const addMessage = (req, res, next) => {
    const name = req.body.name
    const id = req.body.id
    const level = req.body.level
    const message = req.body.message
    const contact = req.body.contact

    let data = new Message ({
        name: name,
        id: id,
        level: level,
        message: message,
        contact: contact
    })
    
    data.save()
    .then(() => {
        res.status(200).send()
    })
    .catch(() => {
        res.status(500).send()
    })
}

const deleteMessage = (req, res, next) => {
    Message.findOneAndDelete({_id: req.params.id}, function(err, result) {
        if(err) {
            res.status(500).send(err)
        }
        if(result) {
            res.status(200).send()
        }
    })
}

const getMessage = (req, res, next) => {
    Message.find().sort({createdAt: -1})
    .then(data => {
        res.json(data)
    })
    .catch(err => {
        res.status(400).send(err)
    })
}

module.exports = {
    addMessage, deleteMessage, getMessage
}
const Voter = require('../models/Voter')
const bcrypt = require('bcrypt')

const addVoter = (req, res, next) => {
    const password = req.body.password
    const id = req.body.id

    bcrypt.hash(password, 10, function (err, hashedPass){
        if (err) {
            res.json({
                error: err
            })
        }
        Voter.findOne({id: id}, function (err, existingVoter){
            if (existingVoter === null ){
                let voter = new Voter({
                    password: hashedPass,
                    id: id
                })
        
            voter.save()
            .then(() => {
                res.status(200).send()
            })
            .catch(() => {
                res.status(500).send()
            })
            }
            else {
            res.status(404).send()
            }
    
            if(err) {
                res.status(500).send()
            }
        })
        
    })

}

const deleteVoter = (req, res, next) => {
    Voter.findOneAndDelete({_id: req.params.id}, function(err, result) {
        if(err) {
            res.status(500).send(err)
        }
        if(result) {
            res.status(200).send()
        }
    })
}

const getVoter = (req, res, next) => {
    Voter.find().sort({name: 1})
    .then(data => {
        res.json(data)

    })
    .catch(err => {
        res.status(404).send(err)
    })
}

module.exports = {
    addVoter, deleteVoter, getVoter
}
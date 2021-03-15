const Poll = require('../models/Poll')
const Voter = require('../models/Voter')
var bcrypt = require('bcrypt')

const addPoll = (req, res, next) => {
    const name = req.body.name

    let poll = new Poll({
        name: name
    })

    poll.save()
    .then(()=>{
        res.status(200).send()
    })
    .catch(() => {
        res.status(500).send()
    })
}

const addPollOption = (req, res, next) => {
    const name = req.body.name
    Poll.findOne({_id: req.params.id, "pollOption.name": name}, function(err, result){
        if (err) {
        res.status(500).send()
        }

        if (result === null){
            Poll.findOneAndUpdate({_id: req.params.id}, {$push: {pollOption: {name: name}}})
            .then(()=> {
                res.status(200).send()
            })
            .catch(()=>{
                res.status(500).send()
            })
        }

        if (result !== null) {
            res.status(400).send()
        }
    })
        
}

const addVote = (req, res, next) => {
    const option = req.body.option
    const password = req.body.password

    Voter.findOne({id: req.body.name})
    .then(student => {
        if (student) {
            bcrypt.compare(password, student.password, function(err, result){
                if (err) {
                    res.status(404).json('Wrong password')
                }

                if (result) {
                    Poll.findOne({$and: [{_id: req.params.id}, {pollVoters: req.body.name} ] }, function(err, existingVote){
                        if(err) {
                            res.status(500).json('Something went wrong')
                        }
                        if(existingVote !== null) {
                            res.status(400).json('You have already voted')
                        }
                        if(existingVote === null){
                            Poll.findOneAndUpdate({_id: req.params.id}, {$push: {pollVoters: req.body.name}})
                            .then(()=> {
                            Poll.findOneAndUpdate({_id: req.params.id, "pollOption.name": option}, {$addToSet: {"pollOption.$.optionVoters": req.body.name}})
                            .then(() =>{
                                res.status(200).json('Vote added')
                            })
                            .catch(() =>{
                                res.status(500).json('Could not add vote')
                            })
                            })
                            .catch(() => {
                                res.status(500).json('Could not add voter')
                            })
                        }
                    })
                }
                else {
                    res.status(404).json('Wrong password')
                }
            })
        }
        else {
            res.status(404).json('Voter does not exist')
        }
    })
   
    // Voter.findOne({id: req.body.name}, function (err, existingVoter){
    //     if(err) {
    //         res.status(500).json('Something went wrong')
    //     }
    //     if(existingVoter === null) {
    //         res.status(404).json('Voter does not exist')
    //     }
    //     if(existingVoter !== null) {
    //         Poll.findOne({$and: [{_id: req.params.id}, {pollVoters: req.body.name} ] }, function(err, existingVote){
    //             if(err) {
    //                 res.status(500).json('Something went wrong')
    //             }
    //             if(existingVote !== null) {
    //                 res.status(400).json('You have already voted')
    //             }
    //             if(existingVote === null){
    //                 Poll.findOneAndUpdate({_id: req.params.id}, {$push: {pollVoters: req.body.name}})
    //                 .then(()=> {
    //                 Poll.findOneAndUpdate({_id: req.params.id, "pollOption.name": option}, {$addToSet: {"pollOption.$.optionVoters": req.body.name}})
    //                 .then(() =>{
    //                     res.status(200).json('Vote added')
    //                 })
    //                 .catch(() =>{
    //                     res.status(500).json('Could not add vote')
    //                 })
    //                 })
    //                 .catch(() => {
    //                     res.status(500).json('Could not add voter')
    //                 })
    //             }
    //         })
    //     }
    // })

}

const deleteVote = (req, res, next) => {

    // Poll.updateOne({_id: req.params.id}, {$pull : {"pollVoters" : req.params.vote }}, function (err, result) {
    //     if (err) {
    //         res.status(400)
    //     }
    //     if (result) {
    //         Poll.updateOne({_id: req.params.id, "pollOption.optionVoters" : req.params.vote }, {$pull: {"pollOption.$.optionVoters": req.params.vote}}, function(err, result) {
    //             if (err) {
    //                 res.status(400)
    //             }
    //             if (result) {
    //                 res.status(200)
    //             }
    //         })
            
    //     }
    // })

        Poll.updateOne({_id: req.params.id}, {$pull : {"pollVoters" : req.params.vote }})
        .then(()=> {
            Poll.updateOne({_id: req.params.id, "pollOption.optionVoters" : req.params.vote }, {$pull: {"pollOption.$.optionVoters": req.params.vote}})
            .then(() => {
                res.status(200).send()
            })
            .catch (()=>{
                res.status(400).send()
            })
        })
        .catch(() => {
            res.status(400).send()
        })
        
}

const getVote = (req, res, next) => {
    Poll.findOne({_id: req.params.id}, function(err, result) {
        if(err) {
            res.status(400).send(err)
        }
        if(result){
            res.json(result.pollOption)
        }
    })
}

const getVoteCount = (req, res, next) => {
    Poll.findOne({_id: req.params.id}, function(err, result) {
        if(err) {
            res.status(400).send(err)
        }
        if(result){
            res.json(result.pollVoters.length)
            // console.log(result.pollVoters.length)
        }
    })
}

const deletePoll = (req, res, next) => {
    Poll.findOneAndDelete({_id: req.params.id}, function(err, result) {
        if(err) {
            res.status(500).send(err)
        }
        if(result) {
            res.status(200).send()
        }
    })
}


const getPoll = (req, res, next) => {
    Poll.find().sort({createdAt: -1})
    .then(data => {
        res.json(data)
    })
    .catch(err => {
        res.status(404).send(err)
    })
}

const getPollOption = (req, res, next) => {
    Poll.findOne({_id: req.params.id}, function(err, result) {
        if(err) {
            res.status(400).send(err)
        }
        if(result){
            res.json(result.pollOption)
        }
    })
}

const getVoteList = (req, res, next) => {
    Poll.findOne({_id: req.params.id}, function(err, result) {
        if(err) {
            res.status(400).send(err)
        }
        if(result){
            res.json(result.pollVoters)
        }
    })
}

module.exports = {
    addPoll, deletePoll, getPoll, addPollOption, getPollOption, addVote, getVote, getVoteCount, getVoteList, deleteVote
}
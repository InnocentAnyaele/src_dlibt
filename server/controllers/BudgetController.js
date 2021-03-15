const Budget = require('../models/Budget')
const { Z_ASCII } = require('zlib')

const addBudget = (req, res, next) => {
    const title = req.body.title
    const file = req.files.file
    // const filename = Date.now() + file.name
    const filename = req.body.fileName
    const url = req.body.url

    // console.log(filename)

    let budget = new Budget({
        title: title,
        file: filename,
        url: url
    })

    budget.save()
    .then(()=> {
        res.json({message: 'Budget added successfully'})
    })
    .catch((err) => {
        res.status(400).send(err)
    })

    // file.mv(`${__dirname}../../../client/src/assets/budget/${filename}`, err => {
    //     if (err) {
    //         console.error(err)
    //         return res.status(500).send(err)
    //     }

    //     let budget = new Budget({
    //         title: title,
    //         file: filename,
    //     })

    //     budget.save()
    //     .then(()=> {
    //         res.json({message: 'Budget added successfully'})
    //     })
    //     .catch((err) => {
    //         res.status(400).send(err)
    //     })
    // })
}

const getBudget = (req, res, next) => {
    Budget.find().sort({createdAt : -1})
    .then(data => {
        res.json(data)
    })
    .catch(err => {
        res.status(404).send(err)
    })
} 

const deleteBudget = (req, res, next) => {
    Budget.findOneAndDelete({_id: req.params.id}, function(err, result) {
        if(err) {
            res.status(500).send(err)
        }
        if(result) {
            res.status(200).send(err)
        }
    })

        // const fs = require('fs')
        // fs.unlink(`${__dirname}../../../client/src/assets/budget/${req.params.file}`, (err) => {
        //     if (err) throw err
        //     // console.log('Successful')
        // })

}

const searchBudget = (req, res, next) => {
    Budget.find({title:{ $regex: req.params.id}}, function(err, result){
        if(err) {
            res.status(500).send(err)
        }
        if(result) {
            res.json(result)
        }
     })
}

module.exports = {
    addBudget, getBudget, deleteBudget, searchBudget
}
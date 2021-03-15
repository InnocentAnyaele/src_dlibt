const Handout = require('../models/Handout')

const addHandout = (req, res, next) => {
    const title = req.body.title
    const file = req.files.file
    // const filename = Date.now() + file.name
    const filename = req.body.fileName
    const url = req.body.url

    // console.log(filename)

    let handout = new Handout({
        title: title,
        file: filename,
        url: url
    })

    handout.save()
    .then(()=> {
        res.json({message: 'Handout added successfully'})
    })
    .catch((err) => {
        res.status(400).send(err)
    })

    // file.mv(`${__dirname}../../../client/src/assets/handout/${filename}`, err => {
    //     if (err) {
    //         console.error(err)
    //         return res.status(500).send(err)
    //     }

    //     let handout = new Handout({
    //         title: title,
    //         file: filename
    //     })

    //     handout.save()
    //     .then(()=> {
    //         res.json({message: 'Handout added successfully'})
    //     })
    //     .catch((err) => {
    //         res.status(400).send(err)
    //     })
    // })
}

const getHandout = (req, res, next) => {
    Handout.find().sort({createdAt : -1})
    .then(data => {
        res.json(data)
    })
    .catch(err => {
        res.status(404).send(err)
    })
} 

const deleteHandout = (req, res, next) => {
    Handout.findOneAndDelete({_id: req.params.id}, function(err, result) {
        if(err) {
            res.status(500).send(err)
        }
        if(result) {
            res.status(200).send(err)
        }
    })

        // const fs = require('fs')
        // fs.unlink(`${__dirname}../../../client/src/assets/handout/${req.params.file}`, (err) => {
        //     if (err) throw err
        //     // console.log('Successful')
        // })

}

const searchHandout = (req, res, next) => {
    Handout.find({title:{ $regex: req.params.id}}, function(err, result){
        if(err) {
            res.status(500).send(err)
        }
        if(result) {
            res.json(result)
        }
     })
}

module.exports = {
    addHandout, getHandout, deleteHandout, searchHandout
}
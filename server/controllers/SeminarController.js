const Seminar = require('../models/Seminar')

const addSeminar = (req, res, next) => {
    const title = req.body.title
    const file = req.files.file
    // const filename = Date.now() + file.name
    const filename = req.body.fileName
    const url = req.body.url

    // console.log(title)
    // console.log(filename)
    // console.log(url)

    let seminar = new Seminar({
        title: title,
        file: filename,
        url: url
    })
    seminar.save()
    .then(()=>{
        res.json({message: 'file saved'})
    })
    .catch((err)=> {
        res.status(400).send(err)
    })

    // file.mv(`${__dirname}../../../client/src/assets/seminar/${filename}`, err => {
    //     if(err) {
    //         console.error(err)
    //         return res.status(500).send(err)
    //     }
    //     let seminar = new Seminar({
    //         title: title,
    //         file: filename
    //     })
    //     seminar.save()
    //     .then(()=>{
    //         res.json({message: 'file saved'})
    //     })
    //     .catch((err)=> {
    //         res.status(400).send(err)
    //     })
    // })
}

const getSeminar = (req, res, next) => {
    Seminar.find().sort({ createdAt: -1})
    .then(data => {
        res.json(data)
    })
    .catch(err => {
        res.status(404).send(err)
    })
}

const deleteSeminar = (req, res, next) => {
    Seminar.findOneAndDelete({_id: req.params.id}, function(err, result) {
        if(err) {
            res.status(500).send(err)
        }
        if(result) {
            res.status(200).send()
        }
    })

    // const fs = require('fs')
    // fs.unlink(`${__dirname}../../../client/src/assets/seminar/${req.params.file}`, (err) => {
    //     if (err) throw err
    //     // console.log('Successful')
    // })
}

const searchSeminar = (req, res, next) => {
    Seminar.find({title:{ $regex: req.params.id}}, function(err, result) {
        if(err) {
            res.status(500).send(err)
        }
        if(result) {
            res.json(result)
        }
     })

}

module.exports = {
    addSeminar, getSeminar, deleteSeminar, searchSeminar
}
const Timetable = require('../models/Timetable')

const addTimetable = (req, res, next) => {
    const title = req.body.title
    const file = req.files.file
    // const filename = Date.now() + file.name
    const filename = req.body.fileName
    const url = req.body.url

    // console.log(filename)

    let timetable = new Timetable({
        title: title,
        file: filename,
        url: url
    })

    timetable.save()
    .then(()=> {
        res.json({message: 'Timetable added successfully'})
    })
    .catch((err) => {
        res.status(400).send(err)
    })

    // file.mv(`${__dirname}../../../client/src/assets/timetable/${filename}`, err => {
    //     if (err) {
    //         console.error(err)
    //         return res.status(500).send(err)
    //     }

    //     let timetable = new Timetable({
    //         title: title,
    //         file: filename
    //     })

    //     timetable.save()
    //     .then(()=> {
    //         res.json({message: 'Timetable added successfully'})
    //     })
    //     .catch((err) => {
    //         res.status(400).send(err)
    //     })
    // })
}

const getTimetable = (req, res, next) => {
    Timetable.find().sort({createdAt : -1})
    .then(data => {
        res.json(data)
    })
    .catch(err => {
        res.status(404).send(err)
    })
} 

const deleteTimetable = (req, res, next) => {
    Timetable.findOneAndDelete({_id: req.params.id}, function(err, result) {
        if(err) {
            res.status(500).send(err)
        }
        if(result) {
            res.status(200).send(err)
        }
    })

        // const fs = require('fs')
        // fs.unlink(`${__dirname}../../../client/src/assets/timetable/${req.params.file}`, (err) => {
        //     if (err) throw err
        //     // console.log('Successful')
        // })

}

const searchTimetable = (req, res, next) => {
    Timetable.find({title:{ $regex: req.params.id}}, function(err, result){
        if(err) {
            res.status(500).send(err)
        }
        if(result) {
            res.json(result)
        }
     })
}

module.exports = {
    addTimetable, getTimetable, deleteTimetable, searchTimetable
}
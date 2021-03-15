const Application = require('../models/Application')


const addApplication = (req, res, next) => {
    const ID = req.body.ID
    const name = req.body.name
    const email = req.body.email
    const contact = req.body.contact
    const department = req.body.department
    const position = req.body.position
    const reference = req.body.reference
    const file = req.body.file
    const filename = req.body.fileName
    const url = req.body.url

    // if (req.files){
    //     const file = req.files.file
    //     // console.log(file)
    //     var filename = Date.now() + file.name
    //     file.mv(`${__dirname}../../../client/src/assets/application/${filename}`,err => {
    //         if (err) {
    //             console.error(err)
    //             return res.status(500).send(err)
    //         }
    //     })
    // }

    let data = new Application ({
        ID: ID,
        name: name,
        email: email,
        contact: contact,
        department: department,
        position: position,
        reference: reference,
        file: filename,
        url: url
    })
    data.save()
    .then(() => {
        res.json({message: 'Application successful'})
    })
    .catch((err) => {
        res.status(500).send(err)
    })

}

const getApplication = (req, res, next) => {
    Application.find().sort({ createdAt: -1})
    .then(data => {
        res.json(data)
    })
    .catch(err => {
        res.status(404).send(err)
    })
}

const deleteApplication = (req, res, next) => {
    Application.findOneAndDelete({_id: req.params.id}, function(err, result) {
        if(err) {
            res.status(500).send(err)
        }
        if (result) {
            res.status(200).send()
        }
    })

    // const fs = require('fs')
    // fs.unlink(`${__dirname}../../../client/src/assets/application/${req.params.file}`, (err) => {
    //     if (err) throw err
    //     // console.log('Successful')
    // })
}

module.exports = {
    addApplication, getApplication, deleteApplication
}
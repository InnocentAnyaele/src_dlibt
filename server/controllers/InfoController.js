const Info = require('../models/Info')

const addInfo = (req, res, next) => {
    const title = req.body.title
    const name = req.body.name
    const info = req.body.info

//     if (req.files){
//         const file = req.files.file
//         var filename = Date.now() + file.name
//         file.mv(`${__dirname}../../../client/src/assets/info/${filename}`, err => {
//             if (err) {
//                 console.error(err)
//                 return res.status(500).send(err)
//             }
//         })
//     }
//   else {
//       var filename = 'datalink.png'
//   }

    let data = new Info({
        title: title,
        name: name,
        info: info,
        // file: filename
    })
    data.save()
    .then(()=> {
        res.json({message: 'Info added successfully'})
    })
    .catch((err) => {
        res.status(400).send(err)
    })
}

const getInfo = (req, res, next) => {
    Info.find().sort({createdAt: -1})
    .then(data => {
        res.json(data)

    })
    .catch(err => {
        res.status(404).send(err)
    })
}

const deleteInfo = (req, res, next) => {
    Info.findOneAndDelete({_id: req.params.id}, function(err, result) {
        if(err) {
            res.status(500).send(err)
        }
        if(result) {
            res.status(200).send()
        }
    })
    // if (req.params.file !== 'datalink.png'){
    //     const fs = require('fs')
    //     fs.unlink(`${__dirname}../../../client/src/assets/info/${req.params.file}`, (err) => {
    //         if (err) throw err
    //         console.log('Successful')
    //     })
    // }
}

const searchInfo = (req, res, next) => {
    Info.find({title:{ $regex: req.params.id}}, function(err, result){
          if(err) {
            res.status(500).send(err)
        }
        if(result) {
            res.json(result)
        }
     })
}

module.exports =  {
    addInfo, getInfo, deleteInfo, searchInfo
}
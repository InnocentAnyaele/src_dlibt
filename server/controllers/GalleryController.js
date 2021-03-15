const Gallery = require('../models/Gallery')

const addGallery = (req, res, next) => {
    const title = req.body.title
    const file = req.files.file
    // const filename = Date.now() + file.name
    const filename = req.body.fileName
    const url = req.body.url

    let gallery = new Gallery({
        title: title, 
        file: filename,
        url: url
    })
    
    gallery.save()
    .then(()=>{
         res.json({message: 'file uploaded!'})
        })
    .catch((err)=> {
        res.status(400).send(err)
        })
       
    // file.mv(`${__dirname}../../../client/src/assets/gallery/${filename}`,err => {
    //     if(err) {
    //         console.error(err)
    //         return res.status(500).send(err)
    //     }
    //     let gallery = new Gallery({
    //         title: title, 
    //         file: filename,
    //         url: url
    //     })
        
    //     gallery.save()
    //     .then(()=>{
    //          res.json({message: 'file uploaded!'})
    //         })
    //     .catch((err)=> {
    //         res.status(400).send(err)
    //         })
    // })

}


const getGallery = (req, res, next) => {
    Gallery.find().sort( { createdAt: -1 } )
    .then(data => {
        res.json(data)

    })
    .catch(err => {
        res.status(404).send(err)
    })

}

const deleteGallery = (req, res, next) => {
Gallery.findOneAndDelete({_id: req.params.id}, function(err, result){
    if(err){
        res.status(500).send(err)
    }
    if(result){
        res.status(200).send()
    }
})

const fs = require('fs')

// fs.unlink(`${__dirname}../../../client/src/assets/gallery/${req.params.file}`, (err) => {
//     if (err) throw err
//     // console.log('Successful')
// })

}

// if(req.files === null) {
//     return res.status(400).json({msg: 'no file uploaded'})
// }

module.exports = {
    addGallery, getGallery, deleteGallery
}
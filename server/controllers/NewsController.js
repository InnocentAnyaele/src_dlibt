const News = require('../models/News')

const addNews = (req, res, next) => {
    const title = req.body.title
    const name = req.body.name
    const news = req.body.news
    const link = req.body.link

//     if(req.files){
//         const file = req.files.file
//         // console.log(file)
//         var filename = Date.now() + file.name
//         file.mv(`${__dirname}../../../client/src/assets/news/${filename}`,err => {
//             if(err) {
//                 console.error(err)
//                 return res.status(500).send(err)
//             }
// })
//     }
//   else {
//     var filename = 'datalink.png'
//   }

        let data = new News({
            title: title,
            name: name,
            news: news,
            link: link,
            // file: filename
        })
        data.save()
        .then(()=> {
            res.json({message: 'News added successfully'})
        })
        .catch((err) => {
            res.status(400).send(err)
        })

  
}

const getNews = (req, res, next) => {
    News.find().sort( { createdAt: -1 } )
    .then(data => {
        res.json(data)

    })
    .catch(err => {
        res.status(404).send(err)
    })
}

const deleteNews = (req, res, next) => {
    News.findOneAndDelete({_id: req.params.id}, function(err, result) {
        if(err) {
            res.status(500).send(err)
        }
        if(result) {
            res.status(200).send()
        }
    })

    // if (req.params.file !== 'datalink.png'){
    //     const fs = require('fs')
    //     fs.unlink(`${__dirname}../../../client/src/assets/news/${req.params.file}`, (err) => {
    //         if (err) throw err
    //         // console.log('Successful')
    //     })
    // }
}

const searchNews = (req, res, next) => {
    News.find({title:{ $regex: req.params.id}}, function(err, result) {
        if(err) {
            res.status(500).send(err)
        }
        if(result) {
            res.json(result)
        }
     })
} 

module.exports = {
    addNews, getNews, deleteNews, searchNews
}
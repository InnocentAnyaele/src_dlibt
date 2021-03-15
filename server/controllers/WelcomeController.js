const Welcome = require('../models/Welcome')
// const { version } = require('mongoose')

// const changeMessage = (req, res, next) => {
//     let welcome = new Welcome ({
//         message : req.body.message
//     })

//     welcome.save()
//     .then(welcome => {
//         res.json({
//             message: welcome.message
//         })
//     .catch (error => {
//         res.status(400).send(error)
//     })
//     }

//     )
// }

const addMessage = (req, res, next) => {
    const message = req.body.message

    let data = new Welcome({
        message : message
    })

    data.save()
    .then(()=>{
        res.json('Message done')
    })
    .catch((err) => {
        res.status(400).send(err)
    })
}

const changeMessage = (req, res, next) => {

    // Welcome.findByIdAndUpdate(req.params.id, req.body)
    // .then(value=> {   
    //             res.status(200).send()
    // })
    // .catch(function (err) {
    //     res.status(500).json({
    //         message: 'Something went wrong, Try again later'
    //     })
    // }
    // )

    Welcome.findByIdAndUpdate({_id: req.params.id}, req.body, function(err, result){
        if(err){
            res.json({
                error: err,
                message: 'something went wrong'
            })
        }
        if (result){
            res.status(200).send()
        }
    })
  
}

const getMessage = (req, res, next) => {
    
    Welcome.findOne()
    .then(value => {
        res.json({
            message: value.message,
            date: value.updatedAt,
            id: value._id
        })
    })
    .catch (error => {
        res.json({
            message: error
        })
    })
}

module.exports = {
    changeMessage, getMessage, addMessage
}
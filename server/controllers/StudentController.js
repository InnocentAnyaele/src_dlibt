const Student = require('../models/Student')
const bycrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const Voter = require('../models/Voter')


//this register function is not being used again, students/voters are now registered in the voter function
const register = (req, res, next) => {
    bycrypt.hash(req.body.password, 10, function (err, hashedPass) {
        if (err) {
            res.json({
                error: err
            })
        }

        let student = new Student ({
            username: req.body.username,
            password: hashedPass
        })
    
        student.save()
        .then(student => {
            res.json({
                message: 'Student has been added'
            })
        })
        .catch(error => {
            res.status(400).send(error)
        })
    })
}

const login = (req, res, next) => {
    var username = req.body.username
    var password = req.body.password

    // console.log(username)
    // console.log(password)


    Voter.findOne({$or: [{id:username}]})
    .then(student => {
        if(student){
            bycrypt.compare(password, student.password, function(err, result){
                if(err) {
                    res.json({
                        error: err,
                        message: 'Something went wrong try again later'
                    })
                }
                if(result){
                    let token = jwt.sign({name: student.id}, 'verySecretValue', {expiresIn: '1h'})
                    res.json({
                        message: 'Login Successful',
                        token: token,
                        auth: true
                    })
                } else {
                    res.json({
                        message: 'Wrong password'
                    })
                }
            })
        } else {
            res.json({
                message: 'No student found'
            })
        }
    })
}

const changePassword = (req, res, next) => {
    const password = req.body.password
    const username = req.body.name
    const newpassword = req.body.newpassword


    bycrypt.hash(newpassword, 10, function (err, hashedPass) { 
        if (err) {
            res.status(500).send(err)
        }

        if (hashedPass) {
            const hashedPassword = hashedPass

            Voter.findOne({$or: [{id:username}]})
            .then(student => {
                if(student){
                    bycrypt.compare(password, student.password, function(err, result){
                        if(err) {
                            res.status(400).send('cannot find a password match')
                        }
                        if(result){
                           student.password = hashedPassword
                           student.save()
                           .then((result) => { res.status(200).send('student saved successfully') })
                           .catch((err) => {res.status(500).send('cannot change password')})
                        } else {
                            res.status(500).send('wrong password')
                        }
                    })
                } else {
                    res.status(400).send('cannot find this user')
                }
            })
            .catch(err => { res.status(500).send('server error')})
        }
    })
    
 }

// const changePassword = (req, res, next) => {
//     const password = req.body.password
//     const username = req.body.name

//      bycrypt.hash(password, 10, function (err, hashedPass) {

//         console.log(username)
//         console.log(password)
//         // console.log(hashedPass)

//          if(err){
//              res.status(500).send(err)
//          }

//          Voter.findOne({id: username}, function(err, user){
//              if (err) return res.status(400).send(err)
//              const dbpassword = user.password
//              console.log('db-pass' + dbpassword)
//             bycrypt.compare(password, user.password, function(err, result){
//                 if (err) return res.status(400).send(err)
//                 user.password = hashedPass
//                 user.save(function(err, result){
//                     if (err) return res.status(500).send(err)
//                     if (result) return res.status(200).send(result)
//                 })
//             })
//          })

//      })
//  }
 

module.exports = {
    register, login, changePassword
}
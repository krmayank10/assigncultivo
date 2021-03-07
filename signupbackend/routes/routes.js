const express = require('express')
const router = express.Router()
const signUpTemplateCopy = require('../models/SignUpModels')

router.post('/signup', (request, response) => {

    const signedUpUser = new signUpTemplateCopy({
        orgid: request.body.orgid,
        fullname: request.body.fullname,
        username: request.body.username,
        designation: request.body.designation,
        password: request.body.password,
        age: request.body.age
    })
    signedUpUser.save()
        .then(data => {
            response.json(data)
        })
        .catch(error => {
            response.json(error)
        })
})




module.exports = router
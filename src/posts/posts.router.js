const postServices = require('./posts.services')

const router = require('express').Router()

router.get('/post', postServices.getAllPost)

router.post('/post', postServices.postNewPost)

router.get('/post/:id', postServices.getOnePost)

router.patch('/post/:id', postServices.patchPost)

router.put('/post/:id', postServices.putPost)

router.delete('/post/:id', postServices.deletePost)

module.exports = router
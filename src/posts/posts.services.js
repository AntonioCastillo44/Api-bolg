const postControllers = require('./posts.controllers')

const getAllPost = (req, res) => {
    postControllers.findAllPosts()
    .then(data => {
        res.status(200).json(data)
    })
    .catch(err => {
        res.status(400).json(err)
    })
} 

const getOnePost = (req, res) => {
    const id = Number(req.params.id)
    postControllers.findPostById(id)
    
    .then(data => {
        if(data){
            res.status(200).json(data)
        } else {
            res.status(404).json(
                {message:'¡Sorry! Do not exist this post'})
        }
    })
    .catch(err => {
        res.status(400).json(err)
    })
}

const postNewPost = (req, res) => {
    const postObj = req.body 
    postControllers.createPost(postObj)
    .then(data => {
        res.status(201).json(data)
    })
    .catch(err => {
        res.status(400).json(err)
    })
}

const deletePost = (req, res) => {
    const id = req.params.id 
    postControllers.deletePost(id)

        .then(data => {
            if(data){
                res.status(204).json(data)  
            } else {
                res.status(404).json(
                    {message:'¡Sorry! Do not exist this post'})
            }
        })
        .catch(err => {
            res.status(400).json(err)
        })
}

const patchPost = (req, res) => {
    const id = req.params.id
    const postObj = req.body 
    postControllers.updatePost(id, productObj)

        .then(data => {
            if(data){
                res.status(200).json({
                    message: `Post with id: ${id} updated succesfully`
                })  
            } else {
                res.status(404).json({
                    message:'¡Sorry! Do not exist this post'
                })
            }
        })
        .catch(err => {
            res.status(400).json(err)
        })
}

const putPost = (req, res) => {
    const id = req.params.id 
    const postObj = req.body 

    if(!postObj.content || !postObj.userName || !postObj.isPublished ){
        return res.status(400).json({
            message: 'Missing Data',
            example_fields: {
                content: 'String',
                userName: 'String',
                isPublished: true
            }
        })
    }

    postControllers.updatePost(id, postObj)
        .then(data => {
            if(data){
                res.status(200).json({
                    message: `Post with id: ${id} updated succesfully`
                })
            } else {
                res.status(404).json({
                    message:'¡Sorry! Do not exist this post'
                })
            }
        })
        .catch(err => {
            res.status(400).json(err)
        })
}

module.exports = {
    getAllPost,
    getOnePost,
    postNewPost,
    deletePost,
    patchPost,
    putPost
}

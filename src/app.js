const express = require('express')
const postRouter = require('./posts/posts.router')
const db = require('./utils/database')

const app = express()

app.use(express.json())

db.authenticate() 
    .then(() => {
        console.log('Database atutentiquere')
    })
    .catch((err) => {
        console.log(err) 
    })

db.sync()
    .then(() => {
        console.log('Database created')
    })
    .catch(err => {
        console.log(err)
    })

    app.get('/', (req, res) => {
        res.json({
            message: 'Server Ok!',
            routes: {
                post: 'http://localhost:9000/api/v1/post'
            }
        })
    })

    app.use('/api/v1', postRouter)

app.listen(9000, () => {
    console.log('Server started at port 9000')
})

module.exports = app

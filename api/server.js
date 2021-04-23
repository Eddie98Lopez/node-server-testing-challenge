const express =require('express')
const helmet = require('helmet')
const cors = require('cors')
const router = require('./router')

const server = express()

server.use(express.json())
server.use(cors())
server.use(helmet())

router.use('/api/stuff', router)





module.exports= server


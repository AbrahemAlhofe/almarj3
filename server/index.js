require('dotenv').config();

const { Nuxt, build } = require('nuxt')

const express = require('express')
const app = express();
const server = require("http").createServer(app);
const io = require('socket.io')(server);

let socketIo = null;
const content = require('./units/content.unit')()
const searchEngine = require('./units/searchEngine.unit')()

const config = require('../nuxt.config')
const isDev = process.env.NODE_ENV === 'development'
const port = process.env.PORT || 8000
const host = process.env.BASE_URL

async function start() {

    const nuxt = new Nuxt(config)

    io.on('connection', (socket) => {

        consola.info({
            message: `SocketIo : there is a new connection !`,
            badge: true
        })

        socketIo = socket
        socket.emit('setTimestamp', content.__timestamp)
        
        socket.on('search', (query, resolve) => {
            searchEngine.search(query).then( resolve )
        })

    })

    app.use( express.json() )

    app.post('/published', async (req, res, next) => {

        if ( req.body.action !== 'published' ) return next();

        const article = await content.getArticleById(req.body.story_id)
        
        searchEngine.indexArticle( article ).catch( err => console.log( err ) )

        content.$updateTimestamp()
        
        // If there is any client connected notify him there is a new update in conent
        if ( socketIo !== null ) {
            socketIo.emit('setTimestamp', content.__timestamp)
            socketIo.emit('published')
        }

        res.status(200).send({
            message: 'article has been indexed yet'
        })

    })

    app.use(nuxt.render)

    if (isDev) build(nuxt)

    server.listen(port, '0.0.0.0')
    
    consola.ready({
        message: `Server listening on ${host}`,
        badge: true
    })

}

start()
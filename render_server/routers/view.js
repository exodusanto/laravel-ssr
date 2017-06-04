const path = require('path')

const VueSSR = require('vue-ssr')

const serverConfig = require('../webpack.server')

const indexRenderer = new VueSSR({
    projectName: 'main', 
    rendererOptions: {
        cache: require('lru-cache')({
            max: 10240,
            maxAge: 1000 * 60 * 15
        })
    }, 
    webpackServer: serverConfig
})

function main (req, res) {
    indexRenderer.render(req, res, JSON.parse(req.query.template))
}

module.exports = {
    main
}
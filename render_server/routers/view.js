const path = require('path')

// const VueSSR = require('vue-ssr')
const VueRender = require('../vue-ssr/renderer')

const serverConfig = require('../webpack.server')

const indexRenderer = new VueRender({
    projectName: 'main', 
    rendererOptions: {
        cache: require('lru-cache')({
            max: 10240,
            maxAge: 1000 * 60 * 15
        })
    }, 
    webpackServer: serverConfig,
    contextHandler: function (req) {
        let context = { url: req.query.path };
        context = Object.assign({}, context, JSON.parse(req.query.renderLaravelData));
        return context
    }
})
function main (req, res) {
    indexRenderer.render(req, res, JSON.parse(req.query.renderLaravelTemplate))
}

module.exports = {
    main
}
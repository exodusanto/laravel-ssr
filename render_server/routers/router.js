const express = require('express')
const router = express.Router()

const View = require('./view')

router.get('*', View.index)

module.exports = router
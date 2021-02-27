const express = require('express')
const app = express()
const knex = require('./connection/create_table')
const router = express.Router()
const sleep = require('system-sleep')
const { Router } = require('express')

app.use(express.json())
app.use('/', router)

require('./router/astrologer')(router)
require('./router/getWholeData')(router)
require('./router/customer')(router)
require('./router/priceWithMinutes')(router)

app.listen(8000, () => {
    console.log('server has started on port 8000')
})
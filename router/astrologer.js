const knex = require('../connection/knex_connection')

module.exports = (Router) => {

    // this route for insert the data of astrologerDetails
    Router.post('/astrologer_post', (req, res) => {
        knex('astrologerDetails').insert(req.body)
        .then((data) => {
            console.log('data posted...')
            res.send('data posted...')
        })
        .catch((err) => {
            console.log(err)
            res.send(err)
        })
    })
}


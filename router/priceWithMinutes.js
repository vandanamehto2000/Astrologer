const knex = require('../connection/knex_connection')

module.exports = (Router) => {

    // this route for price according to the numberOfMinutes
    Router.post('/calculate', (req, res) => {
        knex('priceAccordingToTime').insert({
            numberOfMinutes: req.body.numberOfMinutes,
            price: req.body.price
        })
        .then((data) => {
            console.log('data posted...')
            res.send('data posted..')

        })
        .catch((err) => {
            console.log(err)
            res.send(err)
        })



    })
}

const knex = require('../connection/knex_connection')

module.exports = (Router) => {

    // get whole data of astrologerDetails
    Router.get('/astrologer', (req, res) => {
        knex.select('*').from('astrologerDetails')
        .then((data) => {
            console.log(data)
            res.send(data)
        })
        .catch((err) => {
            console.log(err)
            res.send(err)
        })
    })

    
    // get astrologer data by {astrologer_id}
    .get('/astrologer/:astrologer_id', (req, res) => {
        knex.select('*').from('astrologerDetails')
        .where('astrologer_id', req.params.astrologer_id)
        .then((data) => {
            console.log(data)
            res.send(data)
        })
        .catch((err) => {
            console.log(err)
            res.send(err)
        })
    })


    // get whole data of customerDetails
    .get('/customer', (req, res) => {
        knex.select('*').from('customerDetails')
        .then((data) => {
            console.log(data)
            res.send(data)
        })
        .catch((err) => {
            console.log(err)
            res.send(err)
        })
    })

    // get astrologer data by {customer_id}
    .get('/customer/:customer_id', (req, res) => {
        knex.select('*').from('customerDetails')
        .where('customer_id', req.params.customer_id)
        .then((data) => {
            console.log(data)
            res.send(data)
        })
        .catch((err) => {
            console.log(err)
            res.send(err)
        })
    })




    
    // get total ammount of price according to the number of minutes
    .get('/calculatePrice', (req, res) => {
        knex.select('*').from('priceAccordingToTime')
        .then((data) => {
            var totalAmmount = data[0].numberOfMinutes * data[0].price
            console.log(totalAmmount+'Rs')
            res.send(totalAmmount+'Rs')
        })
        .catch((err) => {
            console.log(err)
            res.send(err)
        })
    })

    // get total ammount of price according to the number of minutes by id

    .get('/calculatePrice/:id', (req, res) => {
        knex.select('*').from('priceAccordingToTime')
        .where('id', req.params.id)
        .then((data) => {
            var totalAmmount = data[0].numberOfMinutes * data[0].price
            console.log(totalAmmount+'Rs')
            res.send(totalAmmount+'Rs')
        })
        .catch((err) => {
            console.log(err)
            res.send(err)
        })
    })
}


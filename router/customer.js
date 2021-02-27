const knex = require('../connection/knex_connection')
let startTime = new Date(Date.now())
let endTime = new Date(startTime.getTime())


module.exports = (Router) => {

    // this route for insert the data of customerDetails
    Router.post('/customer_post', (req, res) => {
        knex('customerDetails').insert(req.body)
        .then((data) => {
            knex.select('astrologer_id', 'astrologer_name').from('astrologerDetails').where('astrologerDetails.astrologer_id', req.body.astrologerId)
            .then((result) => {
                res.send({
                    'customer_id': data[0],
                    'customer_name': req.body.customer_name,
                    'eMail': req.body.eMail,
                    'phoneNumber': req.body.phoneNumber,
                    'paymentStatus': req.body.paymentStatus,
                    'booking_date_time': endTime,
                    'astrologerId': result[0]
                })
            })
            .catch((err) => {
                console.log(err)
                res.send(err)
            })

        })
        .catch((err) => {
            console.log(err)
            res.send(err)
        })
    })

}


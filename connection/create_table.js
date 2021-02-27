const knex = require('./knex_connection')

// To create a table of astrologerDetails
knex.schema.hasTable('astrologerDetails').then((exists) => {
    if(!exists){
        return knex.schema.createTable('astrologerDetails', (table) => {
            table.increments('astrologer_id').primary()
            table.string('astrologer_name')
            table.string('language')
            table.string('experience')
            table.string('categories')
            table.string('image')

        })
        .catch((err) => {
            console.log(err)
        })
    }
    return console.log('table has created....')
})


// To create a table of customerDetails
knex.schema.hasTable('customerDetails').then((exists) => {
    if(!exists){
        return knex.schema.createTable('customerDetails', (table) => {
            table.increments('customer_id').primary()
            table.string('customer_name')
            table.string('eMail')
            table.integer('phoneNumber')
            table.string('paymentStatus')
            table.string('booking_date_time')
            table.integer('astrologerId').unsigned().references('astrologerDetails.astrologer_id')

        })
        .catch((err) => {
            console.log(err)
        })
    }
    return console.log('table has created....')
})


// To create a table of priceAccordingToTime
knex.schema.hasTable('priceAccordingToTime').then((exists) => {
    if(!exists) {
        return knex.schema.createTable('priceAccordingToTime', (table) => {
            table.increments('id').primary()
            table.integer('numberOfMinutes')
            table.integer('price')
        })
        .catch((err) => {
            console.log(err)
        })
    }
    return console.log('table has created...')
})
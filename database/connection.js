var knex = require("knex")({
    client: 'mysql2',
    connection: {
      host : '127.0.0.1',
      port: '3307',
      user : 'root',
      password : '1q2w3e4r!@',
      database : 'app_english'
    }
})

module.exports = knex
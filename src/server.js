const port = 3003

const express = require('express')
const app = express()

// .use -> universal middleware

app.get('/produtos', (req, res, next) => {
    res.send({ name: 'Notebook', price: 1203.99 }) // Object -> JSON
})


app.listen(port, () => {
    console.log(`Server open - port: ${port}`)
})
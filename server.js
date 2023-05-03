const express = require('express');

const app = express()
const port = process.env.PORT || 5000
app.use(express.json());
app.use(express.urlencoded({ extended: false }))

app.use(express.static('static', { extensions:['html'] }))
app.listen(port)
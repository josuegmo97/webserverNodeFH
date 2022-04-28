require('dotenv').config()
const express = require('express')
const hbs = require('hbs')

const app = express()
const port = process.env.PORT;

// hbs
app.set('view engine', 'hbs')
hbs.registerPartials(__dirname + '/views/partials')

// Servir contenido estatico
app.use( express.static('public'))

app.get('/', (req, res) => {
    res.render('home', {
        nombre: "Josue Marin",
        titulo: 'Curso Node'
    })
})

app.get('/elements', (req, res) => {
    res.render('elements', {
        nombre: "Josue Marin",
        titulo: 'Curso Node '
    })
})

app.get('/generic', (req, res) => {
    res.render('generic', {
        nombre: "Josue Marin",
        titulo: 'Curso Node '
    })
})

app.listen(port, () => console.log("App running in port " + port))
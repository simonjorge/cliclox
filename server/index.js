const path = require("path")
const express = require("express")

const PORT = 3001

const app = express()

app.use(express.static(path.resolve(__dirname, '../client/build')))

app.get ('/api', (req, res) => {
    res.json({ message: "Bienvenido a mi servidor :)"})
})

app.get ('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'))
})

app.listen (PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`)
})
const express = require ("express")

const PORT = process.env.PORT || 3001

const app = express ()

app.use (express.static(path.resolve(__dirname, '../client/build')))

app.get ('/', (req, res) => {
    res.json ({
        message: "Bienvenido al servidor"
    })
})

app.get ('/api', (req, res) => {
    res.json ({
        message: "hola mundo"
    })
})

app.get ('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'))
})

app.listen (PORT, () => {
    console.log(`Servidor escuchando el puerto ${PORT}`)
})
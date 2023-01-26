require('dotenv').config()
const express = require('express')
const middlewareLogRequest = require('./middleware/logs')
const upload = require('./middleware/multer')
const userRoutes = require('./routes/users')
const app = express()
const PORT = process.env.PORT

app.use(middlewareLogRequest)
app.use(express.json())
app.use('/assets', express.static('public/img'))

app.use('/users', userRoutes)
app.post('/upload', upload.single('photo'), (req, res) => {
    res.json({
        message: 'Upload berhasil'
    })
})

app.use((err, req, res, next) => {
    res.json({
        message: err.message
    })
})

app.listen(PORT, () => {
    console.log(`Server running in port ${PORT}`)
})
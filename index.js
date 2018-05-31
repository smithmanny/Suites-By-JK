const express = require('express')
const app = express()

app.get('', (req, res) => {
    res.send('Server is working')
})

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
    console.log(`Server listening on port: ${PORT}`)
})
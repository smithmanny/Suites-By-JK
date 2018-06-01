const express = require('express')
const app = express()

if (process.env.NODE_ENV === 'production') {
  // Exprees will serve up production assets
  app.use(express.static('client/build'));

  // Express serve up index.html file if it doesn't recognize route
  const path = require('path');
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

// app.get('/', (req, res) => {
//     res.send('Server is working')
// })

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
    console.log(`Server listening on port: ${PORT}`)
})
const express = require('express')
const app = express()
const port = process.env.PORT || 3000

app.get('', (req, res) => {
  res.send('Hello World')
})
app.get('/testpath', (req, res) => {
  res.send({
    name:'tbnoung'
  })
})

app.listen(port, () => {
  console.log('Start server at port' + port)
})
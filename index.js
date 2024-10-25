const express = require('express')
const app = express()
app.use(express.json())

app.listen(3000, () => {
  console.log('Server Running at http://localhost:3000/')
})

app.post('/totalValue/', (request, response) => {
  const products = request.body.products

  let totalValue = 0
  products.map(
    eachproduct => (totalValue += eachproduct.price * eachproduct.quantity),
  )
  response.send({totalValue})
})

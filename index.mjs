import express from 'express'
import { products } from './productData.mjs'
import cors from "cors"

const app = express()
const port = process.env.PORT || 3000

app.use(cors())

app.get('/', (req, response) => {
  response.send({name:"Usama", age:18})
})

app.get('/products', (req, response) => {
  // response.send({name:"kiwi", price:"800", quantity:"1kg"})
  response.send(products)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
import express, { response } from 'express'
// import { products } from './productData.mjs'
import cors from "cors"

const app = express()
const port = process.env.PORT || 3000
const products =[]

app.use(cors({ origin: ["https://far-flung-kitten-usama.surge.sh", "http://localhost:5173"] }));
app.use(express.json())
 
app.get('/', (req, response) => {
  response.send({name:"Usama", age:18})
})

app.get('/products', (req, response) => {
  response.status().send(products)
})

app.get('/product/:id', (req, response) => {
  const index = Number(req.params.id) - 1

  const product = products[index]
    
  if(!product){
    response.status(404).send("product not found")
  }

  response.status(200).send(product)
})

// product add api
app.post('/product', (req, response) => {
  console.log("request ki body",req.body);
  
  const product = req.body
  products.push(product)
  response.status(201).send('product is added successfully!')
})

// app.get('/products', (req, response) => {
//   // response.send({name:"kiwi", price:"800", quantity:"1kg"})
//   response.send(products)
// })

app.use((req, response) => {
  response.status(404).send("no route found yet!")
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
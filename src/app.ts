import 'dotenv/config.js'
import express from 'express'
import dishRouter from './routers/dish.router.js'
import orderRouter from './routers/order.router.js'
import cartRouter from './routers/cart.router.js'
import { DataSource } from "typeorm"
import { Dish } from './models/Dish.js'
import { Order } from './models/Order.js'
import { Cart } from './models/Cart.js'

const app = express()
app.use(express.json())
app.use('/api/dish', dishRouter)
app.use('/api/order', orderRouter)
app.use('/api/cart', cartRouter)

const PORT = 3000

const AppDataSource = new DataSource({
    type: "postgres",
    host: process.env.POSTGRES_HOST,
    port: +process.env.POSTGRES_PORT!,
    username: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DB,
    entities: [Dish, Order, Cart]
})

await AppDataSource.initialize()
    .then(() => {
        console.log("Data Source has been initialized!")
    })
    .catch((err) => {
        console.error("Error during Data Source initialization", err)
    })

app.listen(PORT, () => console.log("Server has been started on port " + PORT))

export default AppDataSource
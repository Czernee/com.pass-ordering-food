import { Order } from '../models/Order.js'
import AppDataSource from "../app.js"
import orderService from '../services/order.service.js'

class orderController {
    async getOrders(req, res) {
        try {
            const orders = await orderService.getOrders()
            res.json(orders)
        } catch (e) {
            res.status(500).json({message: e.message})
        }
    }

    async getOneOrder(req, res) {
        try {
            const order = await orderService.getOneOrder(req.params.id)
            res.json(order)
        } catch (e) {
            res.status(500).json({message: e.message})
        }
    }

    async createOrder(req, res) {
        try {
            const newOrder = await orderService.createOrder(req.body)
            res.json(newOrder)
        } catch (e){ 
            res.status(500).json({message: e.message})
        }
    }

    async updateOrder(req, res) {
        try {
            const updatedOrder = await orderService.updateOrder(req.params.id, req.body)
            res.json(updatedOrder)
        } catch (e) {
            res.status(500).json({message: e.message})
        }
    }
}

export default new orderController()
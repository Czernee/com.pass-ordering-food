import { Request, Response } from 'express'
import orderService from '../services/order.service.js'

class orderController {
    async getOrders(req: Request, res: Response) {
        try {
            const orders = await orderService.getOrders()
            res.json(orders)
        } catch (e) {
            res.status(500).json({message: e.message})
        }
    }

    async getOneOrder(req: Request, res: Response) {
        try {
            const { id } = req.params
            const order = await orderService.getOneOrder(id)
            res.json(order)
        } catch (e) {
            res.status(500).json({message: e.message})
        }
    }

    async createOrder(req: Request, res: Response) {
        try {
            const orderData = req.body
            const newOrder = await orderService.createOrder(orderData)
            res.json(newOrder)
        } catch (e){ 
            res.status(500).json({message: e.message})
        }
    }

    async updateOrder(req: Request, res: Response) {
        try {
            const { id } = req.params
            const orderData = req.body
            const updatedOrder = await orderService.updateOrder(id, orderData)
            res.json(updatedOrder)
        } catch (e) {
            res.status(500).json({message: e.message})
        }
    }
}

export default new orderController()
import Router from 'express'
import orderController from '../controllers/order.controller.js'
const orderRouter = Router()

orderRouter.get('/', orderController.getOrders)
orderRouter.get('/:id', orderController.getOneOrder)
orderRouter.post('/', orderController.createOrder)
orderRouter.patch('/:id', orderController.updateOrder)

export default orderRouter
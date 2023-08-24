import Router from 'express'
const orderRouter = Router()
import orderController from '../controllers/order.controller.js'

orderRouter.get('/', orderController.getOrders)
orderRouter.get('/:id', orderController.getOneOrder)
orderRouter.post('/', orderController.createOrder)
orderRouter.patch('/:id', orderController.updateOrder)

export default orderRouter
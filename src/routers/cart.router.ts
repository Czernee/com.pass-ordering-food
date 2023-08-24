import Router from 'express'
const cartRouter = Router()
import cartController from '../controllers/cart.controller.js'

cartRouter.get('/', cartController.getCart)
cartRouter.post('/', cartController.createCart)
cartRouter.patch('/', cartController.addItem)
cartRouter.patch('/', cartController.deleteItem)

export default cartRouter
import Router from 'express'
import cartController from '../controllers/cart.controller.js'
const cartRouter = Router()

cartRouter.get('/:id', cartController.getCart)
cartRouter.patch('/add/:clientId', cartController.addItem)
cartRouter.patch('/delete/:clientId', cartController.deleteItem)

export default cartRouter
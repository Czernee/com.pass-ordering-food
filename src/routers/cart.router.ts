import Router from 'express'
const cartRouter = Router()
import cartController from '../controllers/cart.controller.js'

cartRouter.get('/:id', cartController.getCart)
cartRouter.patch('/add/:id', cartController.addItem)
cartRouter.patch('/delete/:id', cartController.deleteItem)

export default cartRouter
import { Cart } from '../models/Cart.js'
import AppDataSource from "../app.js"
import cartService from '../services/cart.service.js'

class cartController {
    async getCart(req, res) {
        try {
            const cart = await cartService.getCart(req.params.id)
            res.json(cart)
        } catch (e) {
            res.status(500).json({message: e.message})
        }
    }

    async addItem(req, res) {
        try {
            const newItem = await cartService.addItem(req.params.id, req.body.dishes)
            res.json(newItem)
        } catch (e) {
            res.status(500).json({message: e.message})
        }
    }

    async deleteItem(req, res) {
        try {
            const deletedItem = await cartService.deleteItem(req.params.id, req.body.dishes)
            res.json({message: "Успешно удалено"})
        } catch (e) {
            res.status(500).json({message: e.message})
        }
    }
}

export default new cartController()
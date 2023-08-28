import cartService from '../services/cart.service.js'
import { Request, Response } from 'express'

class cartController {
    async getCart(req: Request, res: Response) {
        try {
            const { id } = req.params
            const cart = await cartService.getCart(id)
            res.json(cart)
        } catch (e) {
            res.status(500).json({message: e.message})
        }
    }

    async addItem(req: Request, res: Response) {
        try {
            const { clientId } = req.params
            const { dishes } = req.body
            const newItem = await cartService.addItem(clientId, dishes)
            res.json(newItem)
        } catch (e) {
            res.status(500).json({message: e.message})
        }
    }

    async deleteItem(req: Request, res: Response) {
        try {
            const { clientId } = req.params
            const { dishes } = req.body
            const deletedItem = await cartService.deleteItem(clientId, dishes)
            res.json({message: "Успешно удалено"})
        } catch (e) {
            res.status(500).json({message: e.message})
        }
    }
}

export default new cartController()
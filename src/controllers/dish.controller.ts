import { Request, Response } from 'express'
import dishService from '../services/dish.service.js'

class dishController {
    async getDishes(req: Request, res: Response) {
        try {
            const dishes = await dishService.getDishes()
            res.json(dishes)
        } catch (e) {
            res.status(500).json({message: e.message})
        }
    }

    async getOneDish(req: Request, res: Response) {
        try {
            const { id } = req.params
            const dish = await dishService.getOneDish(id)
            res.json(dish)
        } catch (e) {
            res.status(500).json({message: e.message})
        }
    }

    async createDish(req: Request, res: Response) {
        try {
            const dishData = req.body
            const newDish = await dishService.createDish(dishData)
            res.json(newDish)
        } catch (e) {
            res.status(500).json({message: e.message})
        }
    }

    async updateDish(req: Request, res: Response) {
        try {
            const { id } = req.params
            const dishData = req.body
            const updatedDish = await dishService.updateDish(id, dishData)
            res.json(updatedDish)
        } catch (e) {
            res.status(500).json({message: e.message})
        }
    }

    async deleteDish(req: Request, res: Response) {
        try {
            const { id } = req.params
            const deletedDish = await dishService.deleteDish(id)
            res.json({ message: "Блюдо успешно удалено"})
        } catch (e) {
            res.status(500).json({message: e.message})
        }
    }
}

export default new dishController()
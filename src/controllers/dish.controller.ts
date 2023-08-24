import { Dish } from '../models/Dish.js'
import AppDataSource from "../app.js"
import dishService from '../services/dish.service.js'

class dishController {
    async getDishes(req, res) {
        try {
            const dishes = await dishService.getDishes()
            res.json(dishes)
        } catch (e) {
            res.status(500).json({message: e.message})
        }
    }

    async getOneDish(req, res) {
        try {
            const dish = await dishService.getOneDish(req.params.id)
            res.json(dish)
        } catch (e) {
            res.status(500).json({message: e.message})
        }
    }

    async createDish(req, res) {
        try {
            const newDish = await dishService.createDish(req.body)
            res.json(newDish)
        } catch (e) {
            res.status(500).json({message: e.message})
        }
    }

    async updateDish(req, res) {
        try {
            const updatedDish = await dishService.updateDish(req.params.id, req.body)
            res.json(updatedDish)
        } catch (e) {
            res.status(500).json({message: e.message})
        }
    }

    async deleteDish(req, res) {
        try {
            const deletedDish = await dishService.deleteDish(req.params.id)
            res.json({ message: "Блюдо успешно удалено"})
        } catch (e) {
            res.status(500).json({message: e.message})
        }
    }
}

export default new dishController()
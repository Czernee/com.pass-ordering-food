import { Dish } from "../models/Dish.js"
import AppDataSource from "../app.js"

class dishService {
    async getDishes() {
        const dishRepository = AppDataSource.getRepository(Dish)
        return await dishRepository.find()
    }

    async getOneDish(id) {
        if (!id) {
            throw new Error("Не указан ID");
        }

        const dishRepository = AppDataSource.getRepository(Dish)
        return await dishRepository
        .createQueryBuilder("dish")
        .where("dish.id = :id", { id })
        .getOne()
    }

    async createDish(dishData) {
        const dishRepository = AppDataSource.getRepository(Dish)
        const newDish = dishRepository.create(dishData)
        await dishRepository.save(newDish)
        return newDish
    }

    async updateDish(id, dishData) {
        const dishRepository = AppDataSource.getRepository(Dish)
        const dish = await dishRepository.createQueryBuilder().where('id = :id', { id }).getOne()

        if (!dish) {
            throw new Error("Блюдо не найдено")
        }

        dish.dish_name = dishData.dishname
        dish.composition = dishData.composition
        dish.price = dishData.price

        await dishRepository.save(dish)
        return dish
    }

    async deleteDish(id) {
        if (!id) {
            throw new Error("Не указан ID")
        }

        const dishRepository = AppDataSource.getRepository(Dish)

        return await dishRepository
            .createQueryBuilder()
            .delete()
            .where("id = :id", {id})
            .execute()
    }
}

export default new dishService()
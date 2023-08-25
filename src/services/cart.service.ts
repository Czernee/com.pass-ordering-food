import { Cart } from "../models/Cart.js"
import { Dish } from "../models/Dish.js"
import AppDataSource from "../app.js"

class cartService {
    async getCart(client_id) {
        if (!client_id) {
            throw new Error("Не указан ID");
        }

        const cartRepository = AppDataSource.getRepository(Cart)
        return await cartRepository
        .createQueryBuilder("cart")
        .where("client_id = :client_id", { client_id })
        .getOne()
    }

    async addItem(client_id, dish_id) {
        const cartRepository = AppDataSource.getRepository(Cart)
        let cart = await cartRepository.createQueryBuilder().where('client_id = :client_id', { client_id }).getOne()

        if (!cart) {
            cart = cartRepository.create({ client_id })
            cart.dishes = [dish_id]
            await cartRepository.save(cart)
        } else {
           cart.dishes.push(dish_id)
           await cartRepository.save(cart)
        }

        return cart
    }

    async deleteItem(client_id, dish_id) {
        const cartRepository = AppDataSource.getRepository(Cart)
        const cart = await this.getCart(client_id)

        if (cart && cart.dishes.includes(dish_id)) {
            cart.dishes = cart.dishes.filter(id => id !== dish_id)
            await cartRepository.save(cart)
        }

        return cart
    }
}
export default new cartService()
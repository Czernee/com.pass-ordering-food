import { Cart } from "../models/Cart.js";
import AppDataSource from "../app.js";

class cartService {
    async getCart(client_id) {
        if (!client_id) {
            throw new Error("Не указан ID");
        }

        const cartRepository = AppDataSource.getRepository(Cart)
        return await cartRepository
        .createQueryBuilder("cart")
        .where("cart.client_id = :client_id", { client_id })
        .getOne()
    }

    async createCart(cartData) {
        const cartRepository = AppDataSource.getRepository(Cart)
        const newCart = cartRepository.create(cartData)
        await cartRepository.save(newCart)
        return newCart
    }

    async addItem(client_id, cartData) {
        const cartRepository = AppDataSource.getRepository(Cart)
        const cart = await cartRepository.createQueryBuilder().where('client_id = :client_id', { client_id }).getOne()

        cart.dishes = cartData.dishes

        await cartRepository.save(cart)
        return Cart        
    }

    async deleteItem(client_id, cartData) {
        const cartRepository = AppDataSource.getRepository(Cart)
        const cart = await cartRepository.createQueryBuilder().where('client_id = :client_id', { client_id }).getOne()

        cart.dishes = cartData.dishes

        await cartRepository.save(cart)
        return Cart  
    }
}

export default new cartService()
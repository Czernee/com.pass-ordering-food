import { Cart } from "../models/Cart.js"
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
        let cartClient = await cartRepository.findOneBy({ client_id: client_id })
        
        if (cartClient === null) {
            await cartRepository.insert({ client_id, dishes: [] })
            cartClient = await cartRepository.findOneBy({ client_id: client_id })
        }
        cartClient?.dishes.push(dish_id)
        
        await cartRepository.save(cartClient)
        return cartClient
    }

    async deleteItem(client_id, dish_id) {
        const cartRepository = AppDataSource.getRepository(Cart)
        const cart = await this.getCart(client_id)
    
        if (cart && cart.dishes.includes(dish_id)) {
            const indexToRemove = cart.dishes.indexOf(dish_id)
            cart.dishes.splice(indexToRemove, 1)
            await cartRepository.save(cart)
        }
    
        return cart;
    }
    
}
export default new cartService()
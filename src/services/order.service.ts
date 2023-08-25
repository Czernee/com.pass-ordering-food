import { Order } from "../models/Order.js";
import AppDataSource from "../app.js";

class orderService {
    async getOrders() {
        const orderRepository = AppDataSource.getRepository(Order)
        return await orderRepository.find()
    }

    async getOneOrder(id) {
        if (!id) {
            throw new Error("Не указан ID");
        }

        const orderRepository = AppDataSource.getRepository(Order)
        return await orderRepository
        .createQueryBuilder("order")
        .where("order.id = :id", { id })
        .getOne()
    }

    async createOrder(orderData) {
        const orderRepository = AppDataSource.getRepository(Order)
        const newOrder = orderRepository.create(orderData)
        await orderRepository.save(newOrder)
        return newOrder
    }

    async updateOrder(id, orderData) {
        const orderRepository = AppDataSource.getRepository(Order)
        const order = await orderRepository.createQueryBuilder().where('id = :id', { id }).getOne()

        if (!Order) {
            throw new Error("Заказ не найден")
        }

        order.client_id = orderData.client_id
        order.total_price = orderData.total_price
        order.date_order = orderData.date_order
        order.date_deliver = orderData.date_deliver
        order.completed = orderData.completed

        await orderRepository.save(order)
        return order
    }
}

export default new orderService()
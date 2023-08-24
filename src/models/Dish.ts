import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm"
import { Order } from "./Order.js"
import { Cart } from "./Cart.js"

@Entity()
export class Dish {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    dish_name: string

    @Column()
    composition: string

    @Column()
    price: number

    @ManyToOne(() => Order, order => order.dishes)
    order: Order

    @ManyToOne(() => Cart, cart => cart.dishes)
    cart: Cart
}
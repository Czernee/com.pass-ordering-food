import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm"
import { Dish } from './Dish.js'

@Entity() 
export class Order {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    client_id: number
      
    @Column()
    total_price: number
    
    @Column()
    date_order: Date
    
    @Column()
    date_deliver: Date
    
    @Column()
    completed: boolean

    @OneToMany(() => Dish, dish => dish.order)
    dishes: Dish[]
}
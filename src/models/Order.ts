import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable } from "typeorm"
import { Cart } from './Cart.js'
import { Dish } from './Dish.js'

@Entity() 
export class Order {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    clientid: number

    @ManyToMany(type => Dish)
    @JoinTable()
    dishes: Dish[]

    @Column()
    totalprice: number

    @Column()
    dateorder: Date

    @Column()
    datedeliver: Date

    @Column()
    completed: boolean
}
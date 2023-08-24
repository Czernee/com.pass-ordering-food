import { Entity, PrimaryGeneratedColumn, Column,  OneToMany} from "typeorm"
import { Dish } from './Dish.js'

@Entity() 
export class Cart {
    @PrimaryGeneratedColumn()
    id: number

    @Column() 
    client_id: number

    @OneToMany(() => Dish, dish => dish.cart)
    dishes: Dish[]
}
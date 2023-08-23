import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable } from "typeorm"
import { Dish } from './Dish.js'

@Entity() 
export class Cart {
    @PrimaryGeneratedColumn()
    id: number

    @Column() 
    clientid: number

    @ManyToMany(type => Dish)
    @JoinTable()
    dishes: Dish[]
}
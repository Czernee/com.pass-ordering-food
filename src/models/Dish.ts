import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

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
}
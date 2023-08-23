import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class Dish {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    dishname: string

    @Column()
    composition: string

    @Column()
    price: number

    @Column()
    photos: number[]
}
import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity() 
export class Order {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    client_id: number

    @Column("int", { array: true })
    dishes: number[]

    @Column()
    total_price: number
    
    @Column()
    date_order: Date
    
    @Column()
    date_deliver: Date
    
    @Column()
    completed: boolean

}
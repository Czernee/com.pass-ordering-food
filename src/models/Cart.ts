import { Entity, PrimaryGeneratedColumn, Column} from "typeorm"

@Entity() 
export class Cart {
    @PrimaryGeneratedColumn()
    id: number

    @Column() 
    client_id: number

    @Column("int", { array: true })
    dishes: number[]
}
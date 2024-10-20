import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { Tickets } from "./Tickets";

@Entity({ name: "agendas" })
export class Agendas {
  @PrimaryGeneratedColumn("increment")
  public id: number;

  @Column({ type: "varchar" })
  public name: string;

  @OneToMany(() => Tickets, (ticket) => ticket.id)
  public tickets: Tickets[];

  @CreateDateColumn({ type: "timestamp", name: "created_at" })
  public createdAt: Date;

  @UpdateDateColumn({ type: "timestamp", name: "updated_at" })
  public updatedAt: Date;
}

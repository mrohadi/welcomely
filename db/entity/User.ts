import {
  Column,
  CreateDateColumn,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { Tickets } from "./Tickets";

export enum UserRoles {
  VISITOR = "visitor",
  ADMIN = "admin",
}

@Entity()
export class Users {
  @PrimaryGeneratedColumn("increment")
  public id: number;

  @Column({ type: "varchar", name: "first_name", nullable: true })
  public firstName: string;

  @Column({ type: "varchar", name: "last_name", nullable: true })
  public lastName: string;

  @Index({ unique: true })
  @Column({ type: "varchar" })
  public email: string;

  @Column({ type: "varchar", name: "phone_number", nullable: true })
  public phoneNumber: string;

  @Column({ type: "varchar", nullable: true })
  public address: string;

  @Column({
    type: "enum",
    enum: UserRoles,
    default: UserRoles.VISITOR,
    comment: "Set user role for every user",
  })
  public role: string;

  @OneToMany(() => Tickets, (ticket) => ticket.id)
  public tickets: Tickets[];

  @CreateDateColumn({ type: "timestamp", name: "created_at" })
  public createdAt: Date;

  @UpdateDateColumn({ type: "timestamp", name: "updated_at" })
  public updatedAt: Date;
}

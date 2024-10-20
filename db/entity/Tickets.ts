import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { BuildingLocations } from "./BuildingLocations";
import { Users } from "./User";
import { Agendas } from "./Agendas";

export enum Status {
  WAITING = "waiting",
  APPROVED = "approved",
  REJECTED = "rejected",
  EXPIRED = "expired",
}

@Entity()
export class Tickets {
  @PrimaryGeneratedColumn("increment")
  public id: number;

  @Column({ type: "varchar", name: "ticket_no" })
  public ticketNo: string;

  @ManyToOne(() => Users, (user) => user.id)
  @JoinColumn({ name: "requester" })
  public requester: Users;

  @Column({ type: "timestamp", name: "visit_date" })
  public visitDate: Date;

  @ManyToOne(() => BuildingLocations, (building) => building.id)
  @JoinColumn({
    name: "building_location_id",
  })
  public buildingLocation: BuildingLocations;

  @Column({ type: "varchar" })
  public floor: string;

  @ManyToOne(() => Agendas, (agenda) => agenda.id)
  @JoinColumn({ name: "agenda_id" })
  public agenda: Agendas;

  @Column({ type: "varchar" })
  public notes: string;

  @Column({
    type: "enum",
    enum: Status,
    default: Status.WAITING,
    comment: "Set ticket status for every tickets",
  })
  public status: string;

  @CreateDateColumn({ type: "timestamp", name: "created_at" })
  public createdAt: Date;

  @UpdateDateColumn({ type: "timestamp", name: "updated_at" })
  public updatedAt: Date;
}

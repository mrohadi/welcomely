import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { BuildingTypes } from "./BuildingTypes";
import { Tickets } from "./Tickets";

@Entity({ name: "building_locations" })
export class BuildingLocations {
  @PrimaryGeneratedColumn("increment")
  public id: number;

  @ManyToOne(() => BuildingTypes, (building) => building.id)
  @JoinColumn({ name: "building_type_id" })
  public buildingTypeId: BuildingTypes;

  @Column({ type: "varchar" })
  public name: string;

  @OneToMany(() => Tickets, (ticket) => ticket.id)
  public tickets: Tickets[];

  @CreateDateColumn({ type: "timestamp", name: "created_at" })
  public createdAt: Date;

  @UpdateDateColumn({ type: "timestamp", name: "updated_at" })
  public updatedAt: Date;
}

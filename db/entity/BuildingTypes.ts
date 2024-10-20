import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { BuildingLocations } from "./BuildingLocations";

@Entity({ name: "building_types" })
export class BuildingTypes {
  @PrimaryGeneratedColumn("increment")
  public id: number;

  @OneToMany(() => BuildingLocations, (building) => building.id)
  public buildingLocations: BuildingLocations[];

  @Column({ type: "varchar" })
  public name: string;

  @CreateDateColumn({ type: "timestamp", name: "created_at" })
  public createdAt: Date;

  @UpdateDateColumn({ type: "timestamp", name: "updated_at" })
  public updatedAt: Date;
}

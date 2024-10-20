import { MigrationInterface, QueryRunner } from "typeorm";

export class InitializeTables1729419081949 implements MigrationInterface {
    name = 'InitializeTables1729419081949'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "building_types" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_7fe9b63a2e5a344c346511dc198" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "building_locations" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "building_type_id" integer, CONSTRAINT "PK_0be415b48f40cd23fa326d6ec5c" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "agendas" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_5fea8668c8712b8292ded824549" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "tickets" ("id" SERIAL NOT NULL, "ticket_no" character varying NOT NULL, "visit_date" TIMESTAMP NOT NULL, "floor" character varying NOT NULL, "notes" character varying NOT NULL, "status" "public"."tickets_status_enum" NOT NULL DEFAULT 'waiting', "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "requester" integer, "building_location_id" integer, "agenda_id" integer, CONSTRAINT "PK_343bc942ae261cf7a1377f48fd0" PRIMARY KEY ("id")); COMMENT ON COLUMN "tickets"."status" IS 'Set ticket status for every tickets'`);
        await queryRunner.query(`CREATE TABLE "users" ("id" SERIAL NOT NULL, "first_name" character varying, "last_name" character varying, "email" character varying NOT NULL, "phone_number" character varying, "address" character varying, "role" "public"."users_role_enum" NOT NULL DEFAULT 'visitor', "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id")); COMMENT ON COLUMN "users"."role" IS 'Set user role for every user'`);
        await queryRunner.query(`CREATE UNIQUE INDEX "IDX_97672ac88f789774dd47f7c8be" ON "users" ("email") `);
        await queryRunner.query(`ALTER TABLE "building_locations" ADD CONSTRAINT "FK_f9ebcea2da3f052e49cdabdd952" FOREIGN KEY ("building_type_id") REFERENCES "building_types"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "tickets" ADD CONSTRAINT "FK_5035993bffae0a2d1a704154e94" FOREIGN KEY ("requester") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "tickets" ADD CONSTRAINT "FK_180cd1216bb94c35bafcc462c02" FOREIGN KEY ("building_location_id") REFERENCES "building_locations"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "tickets" ADD CONSTRAINT "FK_6dc4b8163e04f40dd401ef44e43" FOREIGN KEY ("agenda_id") REFERENCES "agendas"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "tickets" DROP CONSTRAINT "FK_6dc4b8163e04f40dd401ef44e43"`);
        await queryRunner.query(`ALTER TABLE "tickets" DROP CONSTRAINT "FK_180cd1216bb94c35bafcc462c02"`);
        await queryRunner.query(`ALTER TABLE "tickets" DROP CONSTRAINT "FK_5035993bffae0a2d1a704154e94"`);
        await queryRunner.query(`ALTER TABLE "building_locations" DROP CONSTRAINT "FK_f9ebcea2da3f052e49cdabdd952"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_97672ac88f789774dd47f7c8be"`);
        await queryRunner.query(`DROP TABLE "users"`);
        await queryRunner.query(`DROP TABLE "tickets"`);
        await queryRunner.query(`DROP TABLE "agendas"`);
        await queryRunner.query(`DROP TABLE "building_locations"`);
        await queryRunner.query(`DROP TABLE "building_types"`);
    }

}

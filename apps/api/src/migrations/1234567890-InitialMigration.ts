import { MigrationInterface, QueryRunner } from 'typeorm';

export class InitialMigration1234567890 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      CREATE TABLE "organizations" (
        "id" uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
        "name" varchar NOT NULL UNIQUE,
        "slug" varchar NOT NULL UNIQUE,
        "settings" json,
        "isActive" boolean DEFAULT true,
        "createdAt" timestamp DEFAULT now(),
        "updatedAt" timestamp DEFAULT now()
      )
    `);

    await queryRunner.query(`
      CREATE TABLE "users" (
        "id" uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
        "email" varchar NOT NULL UNIQUE,
        "password" varchar NOT NULL,
        "firstName" varchar NOT NULL,
        "lastName" varchar NOT NULL,
        "role" varchar NOT NULL DEFAULT 'member',
        "organizationId" uuid REFERENCES "organizations"("id"),
        "isActive" boolean DEFAULT true,
        "createdAt" timestamp DEFAULT now(),
        "updatedAt" timestamp DEFAULT now()
      )
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "users"`);
    await queryRunner.query(`DROP TABLE "organizations"`);
  }
}
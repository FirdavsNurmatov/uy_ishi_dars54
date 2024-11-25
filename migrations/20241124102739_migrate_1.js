/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const up = function (knex) {
  return knex.schema
    .createTableIfNotExists("account", function (table) {
      table.increments("id").primary();
      table.string("email").unique().notNullable();
      table.integer("stripe_customer_id");
      table.integer("stripe_subscription_id");
      table.string("plan");
      table.string("referrer");
      table.boolean("is_active").defaultTo(false);
      table.timestamp("created_at").defaultTo("now()");
    })
    .createTableIfNotExists("payment", function (table) {
      table.increments("id").primary();
      table
        .integer("account_id")
        .unsigned()
        .references("id")
        .inTable("account");
      table.integer("stripe_payment_id");
      table.integer("amount");
      table.string("currency");
      table.string("status");
      table.timestamp("payment_date").defaultTo("now()");
    })
    .createTableIfNotExists("users", function (table) {
      table.increments("id").primary();
      table.string("name");
      table.string("email").unique().notNullable();
      table.string("password").notNullable();
      table
        .integer("account_id")
        .unsigned()
        .references("id")
        .inTable("account");
      table.enu("role", ["user", "admin", "manager"]);
      table.timestamp("last_login").defaultTo("now()");
      table.timestamp("created_at").defaultTo("now()");
    })
    .createTableIfNotExists("teachers", function (table) {
      table.increments("id").primary();
      table.integer("user_id").unsigned().references("id").inTable("users");
    })
    .createTableIfNotExists("students", function (table) {
      table.increments("id").primary();
      table.boolean("permission").defaultTo(false);
      table.integer("user_id").unsigned().references("id").inTable("users");
    })
    .createTableIfNotExists("courses", function (table) {
      table.increments("id").primary();
      table.string("name").unique().notNullable();
      table.string("description").notNullable();
      table.timestamp("start_time").defaultTo("now()");
      table.timestamp("end_time");
    })
    .createTableIfNotExists("assigment", function (table) {
      table.increments("id").primary();
      table.integer("course_id").unsigned().references("id").inTable("courses");
      table
        .integer("student_id")
        .unsigned()
        .references("id")
        .inTable("students");
      table
        .integer("teacher_id")
        .unsigned()
        .references("id")
        .inTable("teachers");
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const down = function (knex) {
  return knex.schema
    .dropTableIfExists("assigment")
    .dropTableIfExists("courses")
    .dropTableIfExists("students")
    .dropTableIfExists("teachers")
    .dropTableIfExists("payment")
    .dropTableIfExists("users")
    .dropTableIfExists("account");
};

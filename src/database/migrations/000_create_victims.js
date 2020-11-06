export async function up(knex) {
  return knex.schema.createTable('Cars', table => {
    table.increments('id').primary();
    table.string('nome').notNullable();
    table.string('marca').notNullable();
    table.string('cor').notNullable();
    table.int('ano').notNullable();
    table.string('descricao').notNullable();
  })
}

export async function down(knex) {
  return knex.schema.dropTable('Cars');
}

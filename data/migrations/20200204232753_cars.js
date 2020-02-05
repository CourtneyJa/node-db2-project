//changes you want to make
exports.up = function(knex) {
  return knex.schema.createTable("cars", tbl => {
    tbl.increments();
    tbl.string("make").notNullable();
    tbl.string("model").notNullable();
    tbl
      .string("VIN")
      .unique()
      .notNullable();
    tbl.decimal("mileage");
    tbl.string("transmission");
    tbl.string("title");
  });
};

//a ctrl z for those changes
exports.down = function(knex) {
  return knex.schema.dropTableIfExists("cars");
};

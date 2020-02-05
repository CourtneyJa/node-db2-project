exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("cars")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("cars").insert([
        {
          make: "Nissan",
          model: "Altima",
          vin: "2HGES15252H603204",
          mileage: 101913,
          transmission: "automatic",
          title: "salvage"
        },
        {
          make: "Toyota",
          model: "4Runner",
          vin: "JH4DA9340PS000417",
          mileage: 101913,
          transmission: "automatic",
          title: "clean"
        },
        {
          make: "Chevrolet",
          model: "Malibu",
          vin: "1G1JF5249W7162279",
          mileage: 37099,
          transmission: "manual",
          title: "clean"
        },
        {
          make: "Ford",
          model: "Mustang",
          vin: "1HGBH41KXML109194",
          mileage: 175313,
          transmission: "auto",
          title: "totalled"
        }
      ]);
    });
};

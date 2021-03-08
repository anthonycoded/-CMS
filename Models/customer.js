const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let accountSchema = new Schema(
  {
    id: {
      type: Number,
    },

    contact: {
      name: { first: String, last: String },
      phone: { type: Number },
      email: { type: String },
      address: { type: String },
      zipcode: { type: Number },
    },

    garage: [
      {
        vehicle: {
          year: { type: Number },
          make: { type: String },
          model: { type: String },
          prod: { type: String },
          vin: { type: String },
          engSize: { type: Number },
          mileage: { type: Number },
        },
      },
    ],
  },
  {
    collection: "customers",
  }
);
module.exports = mongoose.model("Customer", customerSchema);

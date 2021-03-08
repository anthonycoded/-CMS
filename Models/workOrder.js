const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let accountSchema = new Schema(
  {
    id: {
      type: Number,
    },

    contact_id: {contact},

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

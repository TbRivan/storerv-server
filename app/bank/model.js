const mongoose = require("mongoose");

let bankSchema = mongoose.Schema(
  {
    name: {
      type: String,
      require: [true, "Please fill Name"],
    },
    bankName: {
      type: String,
      require: [true, "Please fill Bank Name"],
    },
    noRekening: {
      type: String,
      require: [true, "Please fill Account Number"],
    },
  },
  { timestamp: true }
);

module.exports = mongoose.model("Bank", bankSchema);

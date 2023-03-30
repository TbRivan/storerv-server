const mongoose = require("mongoose");

let categorySchema = mongoose.Schema(
  {
    name: {
      type: String,
      require: [true, "Please fill name for category"],
    },
  },
  { timestamp: true }
);

module.exports = mongoose.model("Category", categorySchema);

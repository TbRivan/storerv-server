const mongoose = require("mongoose");

let usersSchema = mongoose.Schema(
  {
    email: {
      type: String,
      require: [true, "Please fill Email"],
    },
    name: {
      type: String,
      require: [true, "Please fill Name"],
    },
    password: {
      type: String,
      require: [true, "Please fill Password"],
    },
    phoneNumber: {
      type: String,
      require: [true, "Please fill Phone Number"],
    },
    role: {
      type: String,
      enum: ["admin", "user"],
      default: "admin",
    },
    status: {
      type: String,
      enum: ["Y", "N"],
      default: "Y",
    },
  },
  { timestamp: true }
);

module.exports = mongoose.model("Users", usersSchema);

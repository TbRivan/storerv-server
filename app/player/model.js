const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const HASH_ROUND = 10;

let playerSchema = mongoose.Schema(
  {
    email: {
      type: String,
      require: [true, "Please fill Email"],
    },
    name: {
      type: String,
      require: [true, "Please fill Name"],
      maxlength: [225, "Character name must 3 - 225 long"],
      minlength: [3, "Character name must 3 - 225 long"],
    },
    username: {
      type: String,
      require: [true, "Please fill User Name"],
      maxlength: [225, "Character username must 3 - 225 long"],
      minlength: [3, "Character username must 3 - 225 long"],
    },
    password: {
      type: String,
      require: [true, "Please fill Password"],
      maxlength: [50, "Character password must 8 - 50 long"],
      minlength: [8, "Character password must 8 - 50 long"],
    },
    phoneNumber: {
      type: String,
      require: [true, "Please fill Phone Number"],
    },
    role: {
      type: String,
      enum: ["admin", "user"],
      default: "user",
    },
    status: {
      type: String,
      enum: ["Y", "N"],
      default: "Y",
    },
    avatar: {
      type: String,
    },
    fileName: {
      type: String,
    },
    favorite: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
    },
  },
  { timestamp: true }
);

playerSchema.path("email").validate(
  async function (value) {
    try {
      const count = await this.model("Player").countDocuments({ email: value });

      return !count;
    } catch (error) {
      throw error;
    }
  },
  (attr) => `${attr.value} sudah terdaftar`
);

playerSchema.pre("save", function (next) {
  this.password = bcrypt.hashSync(this.password, HASH_ROUND);
  next();
});

module.exports = mongoose.model("Player", playerSchema);

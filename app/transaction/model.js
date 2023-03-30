const mongoose = require("mongoose");

let transactionSchema = mongoose.Schema(
  {
    historyVoucherTopup: {
      gameName: { type: String, require: [true, "Please fill game Name"] },
      category: { type: String, require: [true, "Please fill category"] },
      thumbnail: { type: String },
      coinName: { type: String, require: [true, "Please fill Coin Name"] },
      coinQuantity: {
        type: String,
        require: [true, "Please fill Coin Quantity"],
      },
      price: { type: Number },
    },
    historyPayment: {
      name: { type: String, require: [true, "Please fill Name"] },
      type: { type: String, require: [true, "Please fill Type payment"] },
      bankName: { type: String, require: [true, "Please fill Bank Name"] },
      noRekening: {
        type: String,
        require: [true, "Please fill Account Number"],
      },
    },
    name: {
      type: String,
      require: [true, "please fill name"],
      maxlength: [225, "Character name must 3 - 225 long"],
      minlength: [3, "Character name must 3 - 225 long"],
    },
    accountUser: {
      type: String,
      require: [true, "please fill name account"],
      maxlength: [225, "Character name must 3 - 225 long"],
      minlength: [3, "Character name must 3 - 225 long"],
    },
    tax: {
      type: Number,
      default: 0,
    },
    value: {
      type: Number,
      default: 0,
    },
    status: {
      type: String,
      enum: ["pending", "success", "failed"],
      default: "pending",
    },
    player: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Player",
    },
    historyUser: {
      name: { type: String, require: [true, "Please fill player name"] },
      phoneNumber: {
        type: Number,
        require: [true, "please fill phone number"],
        maxlength: [13, "Character number must 9 - 13 long"],
        minlength: [9, "Character number must 9 - 13 long"],
      },
    },
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Player",
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamp: true }
);

module.exports = mongoose.model("Transaction", transactionSchema);

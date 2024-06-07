const mongoose_delete = require("mongoose-delete");
const { default: mongoose } = require("mongoose");

const customerSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    address: String,
    phone: String,
    email: String,
    image: String,
    description: String,
  },
  {
    timestamps: true, // createAt , updateAt
    // statics: {
    //   findByHoiDanIT(name) {
    //     return this.find({ name: new RegExp(name, "i") });
    //   },
    // },
  }
);
customerSchema.plugin(mongoose_delete, { overrideMethods: true });
const Customer = mongoose.model("Customer", customerSchema);

module.exports = Customer;

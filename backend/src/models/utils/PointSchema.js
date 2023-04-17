const mmongoose = require("mongoose");

const PointSchema = new mmongoose.Schema({
  type: {
    type: String,
    enum: ["Point"],
    require: true,
  },
  coordinates: {
    type: [Number],
    require: true,
  },
});

module.exports = PointSchema;

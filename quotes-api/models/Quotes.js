const mongoose = require("mongoose");

const QuoteSchema = mongoose.Schema({
  quotes: {
    type: Array,
    required: true,
  },
});

module.exports = mongoose.model("Quotes", QuoteSchema, "Quotes");

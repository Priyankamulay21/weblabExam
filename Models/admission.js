const mongoose = require("mongoose");

const admissionSchema = new mongoose.Schema({
  id: Number,
  name :String,
  address:String,
  stream: String,
  year:String,
});

const admission = mongoose.model("admission", admissionSchema);
module.exports = admission;


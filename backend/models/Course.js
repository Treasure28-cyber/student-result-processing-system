const mongoose = require('mongoose');


const courseSchema = new mongoose.Schema({
    title: String,  
    
    code: {
    type: String,
    unique: true
  },
  unit: Number,

  level: Number,

  department: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Department"
  },
    lecturer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
  }
});

module.exports = mongoose.model(
    "Course", courseSchema
);
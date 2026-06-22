const mongoose = require('mongoose');


const resultSchema = new mongoose.Schema({
    student: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Student"    
  },

   course: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Course"
  },

    semester: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Semester"
  },
    total: Number,  
    grade: Number,
    point: Number,
    remark: String
    
});

module.exports = mongoose.model(
    "Result", resultSchema
);
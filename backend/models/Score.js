const mongoose = require('mongoose');


const scoreSchema = new mongoose.Schema({
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
    test: Number,  
    exam: Number,
    total: Number
    
});

module.exports = mongoose.model(
    "Score", scoreSchema
);
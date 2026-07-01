const mongoose = require('mongoose');


const registrationSchema = new mongoose.Schema({
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
  }
});

module.exports = mongoose.model(
    "Course", courseSchema
);
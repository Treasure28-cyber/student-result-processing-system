const mongoose = require('mongoose');

const semesterSchema = new mongoose.Schema({
    session: String,  
    
    semester: {
    type: String,
    enum: ["First", "Second"]
  },

    active: {
        type: Boolean,
        default: false
    }
});

module.exports = mongoose.model(
    "Semester", semesterSchema
);
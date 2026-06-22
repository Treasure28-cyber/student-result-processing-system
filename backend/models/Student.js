const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  matricNo: {
    type: String,
    unique: true,
  },

    level: Number,

    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    
    department: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Department"
    }
});

module.exports = mongoose.model(
    "Student", studentSchema
);
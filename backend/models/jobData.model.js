const mongoose = require('mongoose');

const JobSchema = new mongoose.Schema({
    icon: { type: String, required: true },
    jobTitle: { type: String, required: true },
    company: { type: String, required: true },
    location: { type: String, required: true },
    experience: { type: String, required: true },
    salary: { type: String, required: false },
    detailsLink: { type: String, required: true }
}, { timestamps: true });

JobSchema.index({ jobTitle: 1, company: 1, location: 1 }, { unique: true });

const Job = mongoose.model('Job', JobSchema);

module.exports = Job;

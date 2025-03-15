const { default: axios } = require("axios")
const cheerio=require('cheerio')
const Job = require("../models/jobData.model")
const scraper=require('../datascraper/scraper')
// const pretty=require('pretty')

async function getjobData(req, res) {
    const { limit = 10, location = "", page = 1, search = "" } = req.query;
    const offset = (page - 1) * limit; 
    const limitNum = parseInt(limit);
    const offsetNum = parseInt(offset);

    // Construct the search filter
    let filter = {};
    
    if (search) {
        filter.$or = [
            { jobTitle: { $regex: search, $options: "i" } }, 
            { company: { $regex: search, $options: "i" } } 
        ];
    }

    if (location) {
        filter.location = location; 
    }

    try {
        // Fetch jobs with pagination
        const jobs = await Job.find(filter).skip(offsetNum).limit(limitNum);

        // Get total job count for pagination
        const totalJobs = await Job.countDocuments(filter);
        const totalPages = Math.ceil(totalJobs / limitNum);

        res.json({
            data: jobs,
            pagination: {
                totalJobs,
                totalPages,
                currentPage: page,
                limit: limitNum,
            },
        });
    } catch (error) {
        console.error("Error fetching jobs:", error);
        res.status(500).json({ message: "An error occurred while fetching job data." });
    }
}


module.exports={
    getjobData
}
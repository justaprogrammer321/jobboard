const { default: axios } = require("axios")
const Job = require("../models/jobData.model")
const cheerio=require('cheerio')

const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

const getdatafromsite=async(page_no)=>{
    try {
        const response=await axios.get(`https://internshala.com/jobs/page-${page_no}/`)
        // console.log()
        const $=cheerio.load(response.data)
        const $container=$(` #internship_list_container_${page_no} .internship_meta `)
        let result=$container.map((index,element)=>{
            const icon=$(element).find('.internship_logo > img').attr('src')
            const jobTitle = $(element).find('.job-internship-name').text().trim();
            const company = $(element).find('.company-name').text().trim();
            const location = $(element).find('.locations').text().trim();
            const detailsLink=$(element).find('.job-internship-name > a').attr('href');
            const experienceData = $(element)
            .find('.row-1-item')
            .map((i, el) => $(el).text().trim()) 
            .get();
        
        const experience = experienceData[1] || "Not specified"; // First item as experience
        const salary = $(element).find('.row-1-item .desktop').text().trim()
        
            return {
                icon,
                jobTitle,
                company,
                location,
                experience,
                salary,
                detailsLink,
            };
        }).get()
        console.log(result)

        for (const job of result) {
            await Job.findOneAndUpdate(
                { jobTitle: job.jobTitle, company: job.company, location: job.location }, 
                job, 
                { upsert: true, new: true }
            );
        }
        // console.log(savedJob)
        console.log(`Job saved successfully ${page_no}`)
        
    } catch (error) {
        console.error("Error in saving the job")
    }
}

module.exports={
    getdatafromsite,
    delay
}
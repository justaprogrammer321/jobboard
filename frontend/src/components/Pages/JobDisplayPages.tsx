import {RefreshCcw } from "lucide-react"
import Searchbox from "../search-bar/Searchbox"
// import { Button } from "../ui/button"
import Jobcard from "../job-card/Jobcard"
import Paginationhandler from "../pagination/Paginationhandler";
import { useEffect, useState } from "react";
import axios from 'axios'
import { useParams } from "react-router-dom";
import Filtersection from "../filter-section/Filtersection";
import { Skeleton } from "../ui/skeleton";
// import ScrollToTop from "@/lib/utils";


// const mockJobs = [
//     {
//       id:"1",
//       icon: "https://example.com/google-icon.png",
//       jobTitle: "Frontend Developer",
//       company: "Google",
//       location: "San Francisco, CA",
//       experience: "3+ years",
//       salary: "$120k - $150k",
//       detailsLink: "https://careers.google.com/jobs/frontend-developer",
//     },
//     {
//       id:"2",
//       icon: "https://example.com/amazon-icon.png",
//       jobTitle: "Software Engineer",
//       company: "Amazon",
//       location: "Seattle, WA",
//       experience: "2+ years",
//       salary: "$110k - $140k",
//       detailsLink: "https://www.amazon.jobs/en/jobs/software-engineer",
//     },
//     {
//       id:"3",
//       icon: "https://example.com/microsoft-icon.png",
//       jobTitle: "Backend Developer",
//       company: "Microsoft",
//       location: "Redmond, WA",
//       experience: "4+ years",
//       salary: "$130k - $160k",
//       detailsLink: "https://careers.microsoft.com/backend-developer",
//     },
//     {
//       id:'4',
//       icon: "https://example.com/meta-icon.png",
//       jobTitle: "Data Scientist",
//       company: "Meta",
//       location: "Menlo Park, CA",
//       experience: "5+ years",
//       salary: "$140k - $180k",
//       detailsLink: "https://www.metacareers.com/jobs/data-scientist",
//     },
//     {
//       id:"4",
//       icon: "https://example.com/tesla-icon.png",
//       jobTitle: "Machine Learning Engineer",
//       company: "Tesla",
//       location: "Palo Alto, CA",
//       experience: "3+ years",
//       salary: "$135k - $175k",
//       detailsLink: "https://www.tesla.com/careers/machine-learning-engineer",
//     },
//   ];




function JobDisplayPages() {
    interface Job {
        _id: string;
        icon: string;
        jobTitle: string;
        company: string;
        location: string;
        experience: string;
        salary: string;
        detailsLink: string;
      }
      
      const [jobdata, setjobdata] = useState<Job[]>([]);
      const [loading, setLoading] = useState<boolean>(true);
      const [filter, setFilter] = useState({
        experience: "",
        search: "",
        salary: "",
        location: "",
      });
      
      const { id } = useParams();
      
    //get job data   
    useEffect(()=>{
        const getjobdata=async()=>{
            const pageNum = Number(id) || 1; 
            try {
                const response=await axios.get(`
                    https://jobboard-xi.vercel.app//api/jobs?limit=10&location=&page=${pageNum}&salary=${filter.salary}&experience=${filter.experience}&search=${filter.search}
                    `)
                console.log(response.data.data)
                setjobdata(response.data.data)
            } catch (error) {
                console.error("error fethcing the data")
            }
            finally {
                setLoading(false); 
            }
        }
        getjobdata()
    },[id,filter])

    const handleFilterChange = (key: string, value: string) => {
        setFilter((prev) => ({ ...prev, [key]: value }));
    };
      
    
  return (
    <div className='mx-auto p-8 max-w-7xl'>
        <div className="flex flex-col md:flex-row items-start md:justify-between md:items-center mb-6">
            <h1 className='text-3xl font-bold'>Find Your Dream Job</h1>
            <div className="text-md gap-2 flex text-muted-foreground">
                <RefreshCcw/>
                <span>10 pm,13th Friday 2025</span>
            </div>
        </div>
        <div className='flex gap-6 mb-6 justify-between'>
        <Searchbox filter={filter}  handleFilterChange={handleFilterChange}/>
        </div>
        <div className='border flex justify-between px-3 py-6 items-center rounded-lg mb-6'>
            <Filtersection filter={filter} handleFilterChange={handleFilterChange}/>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
        {loading
          ? 
            Array.from({ length: 6 }).map((_, index) => (
              <Skeleton key={index} className="h-60 w-full rounded-lg" />
            ))
          :
            jobdata.map((item) => <Jobcard job={item} key={item._id} />)}
      </div>
        <div>
            <Paginationhandler/>
        </div>
    </div>
  )
}

export default JobDisplayPages
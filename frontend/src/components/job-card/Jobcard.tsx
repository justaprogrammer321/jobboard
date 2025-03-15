import { ArrowRight,Briefcase, Building, DollarSign, MapPin } from "lucide-react"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "../ui/card"
import { Button } from "../ui/button"
// import { Badge } from "../ui/badge"
import { Separator } from "../ui/separator"

interface JobcardProps{
    job:{
        _id:string,
        icon: string,
        jobTitle:string,
        company:string,
        location: string,
        experience:string,
        salary:string,
        detailsLink: string,
    }
}

function Jobcard(job:JobcardProps) {
  return (
    <Card className="overflow-hidden">
    <CardHeader className="pb-2">
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-3">
          <div className="rounded-md">
            {job.job.icon? <img src={job.job.icon} height={32} width={32} alt="" />:
              <Building className="size-6 text-primary" />
            }
          </div>
          <div>
            <CardTitle className="text-lg">{job.job.company}</CardTitle>
            <p className="text-sm text-muted-foreground">Date created</p>
          </div>
        </div>
        {/* <div className="flex gap-2">
            <Badge variant={job.job.location === "Remote" ? "outline" : "secondary"}>{job.job.location}</Badge>
            <Bookmark/>
        </div> */}
      </div>
    </CardHeader>
    <CardContent className="pb-2">
      <h3 className="text-xl font-bold mb-2">{job.job.jobTitle}</h3>
      <div className="grid gap-2 text-sm">
        <div className="flex items-center gap-2">
          <MapPin className="size-4 text-muted-foreground" />
          <span>{job.job.location}</span>
        </div>
        <div className="flex items-center gap-2">
          <Briefcase className="size-4 text-muted-foreground" />
          <span>{job.job.experience}</span>
        </div>
        <div className="flex items-center gap-2">
          <DollarSign className="size-4 text-muted-foreground" />
          <span>{job.job.salary}</span>
        </div>
      </div>
    </CardContent>
    <Separator />
    <CardFooter className="pt-4">
      <Button className="w-full" variant="outline">
        View Job <ArrowRight className="ml-2 size-4" />
      </Button>
    </CardFooter>
  </Card>
  )
}

export default Jobcard
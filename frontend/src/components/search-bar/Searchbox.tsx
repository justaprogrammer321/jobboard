import {Search} from 'lucide-react'
import { Input } from '../ui/input'
// import { Button } from '../ui/button'

type Props={
  filter:{        
    experience: string,
    search: string,
    salary: string,
    location: string,},
  handleFilterChange:(key:string,value:string)=>void
}

function Searchbox({handleFilterChange}:Props) {
  return (
    <div className=' flex relative w-full justify-between gap-6 items-center'>
      <div className='flex relative w-full items-center'>
        <Search className='absolute left-3 text-muted-foreground'/>
        <Input className='pl-10' placeholder='Enter the job/company name' onChange={(e)=>handleFilterChange('search',e.target.value)}/>
      </div>
    </div>
  )
}

export default Searchbox
// import React from 'react'
import { Button } from '../ui/button'
import { Filter } from 'lucide-react'
import { Input } from '../ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger } from '../ui/select'
import { SelectValue } from '@radix-ui/react-select'

type Props = {
    filter:{        
        experience: string,
        search: string,
        salary: string,
        location: string,}
    handleFilterChange:(key:string,value:string)=>void
}

function Filtersection({filter,handleFilterChange}: Props) {
  return (
   <>
     <h1 className="text-2xl font-bold">Filter</h1>

        <Input
        type="number"
        placeholder="Salary Range"
        value={filter.salary}
        onChange={(e) => handleFilterChange('salary',e.target.value)}
        className="w-full md:w-1/4"
        />

        <Select >
        <SelectTrigger className="w-full md:w-1/4">
            <SelectValue placeholder="Experience" />
        </SelectTrigger>
        <SelectContent>
            <SelectItem value="0-1">0-1 Years</SelectItem>
            <SelectItem value="1-3">1-3 Years</SelectItem>
            <SelectItem value="3-5">3-5 Years</SelectItem>
            <SelectItem value="5+">5+ Years</SelectItem>
        </SelectContent>
        </Select>

        <Input
        type="text"
        placeholder="Location"
        value={filter.location}
        onChange={(e) => handleFilterChange('location',e.target.value)}
        className="w-full md:w-1/4"
        />

        {/* Apply Filter Button */}
        <Button variant="default" className="flex items-center gap-2">
        <Filter size={16} />
        Apply Filters
        </Button>
   </>
  )
}

export default Filtersection
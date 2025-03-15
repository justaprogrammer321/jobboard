import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

type Props = {}

function RedirectPage({}: Props) {
    const navigate=useNavigate()
    useEffect(()=>{
        navigate("/job/1")
    },)
  return (
    <div className="h-full w-full justify-center flex items-center">Redirecting to jobs Page...</div>
  )
}

export default RedirectPage
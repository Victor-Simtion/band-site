import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export function NotFound() {
  const navigate = useNavigate()
  useEffect(()=>{
    setTimeout(()=>{
      navigate("/",{})
    }, 1000)
  },[])
  
    return (
      <h1>Pagina Indisponibila</h1>
  )
}

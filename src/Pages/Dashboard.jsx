import axios from 'axios'
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Dashboard = () => {
  let navigate = useNavigate()
  useEffect(() => {
    getDashboard()
  }, [])
  
  let url = "http://localhost:5000/dashboard"
  let token = localStorage.token
  const getDashboard =()=>{

    axios.get(url,{
      headers: {
        "Authorization": `Bearer ${token}`,
        "Content-Type" : "application/json",
        "Accept" : "Application/json"
      }
    })
    .then((response)=>{
      if(!response.data.status){
        navigate("/signin")
      }
    })
    .catch((err)=>{
      console.log(err)
    })
  }
  
  return (
    <div>
        <h1>This is my Dashboard</h1>
    </div>
  )
}

export default Dashboard
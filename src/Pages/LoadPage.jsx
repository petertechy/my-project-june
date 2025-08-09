import React, { useState,useEffect } from 'react'

const LoadPage = () => {
    const [number, setnumber] = useState(0)
    const [myName, setmyName] = useState("Idris")

    const increaseNumber = () =>{
        setnumber(number+1)
    }

    const changeName = () =>{
        setmyName(myName)
    }

    useEffect(() => {
      console.log("Mounted")

      return () => {
        console.log("Unmount")
      }
    }, [number, myName])
    

    
    
  return (
    <div>
        <h1>Use Effect Discussion</h1>
        <h1>{myName}</h1>
        <input type="text" placeholder='enter your name' onChange={(e)=>setmyName(e.target.value)}/>
        <button onClick={changeName}>Change Name</button>
        <h1>{number}</h1>
        <button onClick={increaseNumber}>Increase Number</button>
    </div>
  )
}

export default LoadPage;

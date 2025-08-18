import React, { useEffect, useRef, useState } from 'react'

const Ref = () => {
    let myRef = useRef()
    const inputRef = useRef(null)
const [display, setdisplay] = useState("")
    
    // useEffect(() => {
        
    //     myRef.current = 12
        
    // },[])

   const changeName = () =>{
        console.log(myRef.current.innerText)
        console.log(inputRef.current.value)
        setdisplay(inputRef.current.value)
        myRef.current.innerText = "Jamal is here"
        myRef.current.style.color = "green"
    }



    console.log(inputRef.current)
    
  return (
    <>
        <h1 ref={myRef}>Hello There</h1>
        <h1>{display}</h1>
        <input ref={inputRef} placeholder='Enter Something' type="text" />
        <button onClick={changeName}>Change Name</button>
    </>
  )
}

export default Ref;
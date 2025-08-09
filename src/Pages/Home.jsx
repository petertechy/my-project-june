import React, { useState } from 'react'

const Home = () => {
    const [firstname, setfirstname] = useState("")
    const [lastname, setlastname] = useState("")
    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")
    const [allUsers, setallUsers] = useState([])
    const submitForm = () =>{
        const userInfo = {
            firstname, lastname, email, password
        }
        console.log(userInfo)

        setallUsers([...allUsers,userInfo])
    }
  return (
    <>
        <div className='mx-auto col-7 my-3 p-4 border shadow'>
            <h1 className='display-2 fw-bold text-center text-primary'>Landing Page</h1>
            <input className='form-control mb-3' type="text" placeholder='firstname' onChange={(e)=>setfirstname(e.target.value)}/>
            <input className='form-control mb-3' type="text" placeholder='lastname' onChange={(e)=>setlastname(e.target.value)}/>
            <input className='form-control mb-3' type="text" placeholder='email' onChange={(e)=>setemail(e.target.value)}/>
            <input className='form-control mb-3' type="text" placeholder='password' onChange={(e)=>setpassword(e.target.value)}/>
            <button className="btn btn-outline-primary w-100" onClick={submitForm}>Submit</button>
        </div>

        <div className='my-3'>
            {allUsers.map((user, index)=>(
                <div key={index}>
                    <h1>{user.firstname}</h1>
                    <h1>{user.lastname}</h1>
                    <h1>{user.email}</h1>
                    <h1>{user.password}</h1>
                </div>
            ))}
        </div>


    </>
  )
}

export default Home;

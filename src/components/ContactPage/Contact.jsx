import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increaseByParam, increment, saveStudent } from '../../redux/counterSlice'

const Contact = () => {
  const [student, setstudent] = useState("")
  const [age, setage] = useState("")
    // const count = useSelector(state => state.counterSlice.count)
    // const count = useSelector(function(state){
    //   console.log(state)
    // })
    // console.log(count.counterSlice.count)
    // let count = count.counterSlice.count
    let count = useSelector(state => state.counterSlice.count)

    let dispatch = useDispatch()
  return (
    <div className='mx-auto col-7 rounded-3 border p-3 my-4 '>
        <h1>The Count is {count}</h1>
        <input placeholder='Enter your name' className='form-control mb-3' type="text" onChange={(e)=>setstudent(e.target.value)}/>
        <input placeholder='Enter your age' className='form-control mb-3' type="text" onChange={(e)=>setage(e.target.value)}/>
        <br />
        <button className='btn btn-success w-100 my-2' onClick={()=>dispatch(increment())}>Increase</button>
        <button className='btn btn-success w-100 my-2' onClick={()=>dispatch(decrement())}>Decrease</button>
        <button className='btn btn-success w-100 my-2' onClick={()=>dispatch(increaseByParam(5))}>Increase By Number</button>
        <button className='btn btn-success w-100 my-2' onClick={()=>dispatch(saveStudent({student, age}))}>Save Student</button>
       
    </div>
  )
}

export default Contact
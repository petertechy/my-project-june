import React from 'react'
import { useSelector } from 'react-redux'

const Contact = () => {
    const count = useSelector(state => state.counterSlice.count)
    // console.log(count.counterSlice.count)
    // let count = count.counterSlice.count
  return (
    <div>
        <h1>The Count is {count}</h1>
        <button>Increase</button>
        <button>Decrease</button>
    </div>
  )
}

export default Contact
// import React, { useState } from "react";
// import About from "./components/AboutPage/About";

// const App = () => {
//   const myStyle = {
//     color: "red",
//     textAlign: "center",
//   };

//   const [number, setnumber] = useState(9)

//   const increaseNumber = () =>{
//     setnumber(number+1)
//     console.log(number)
//   }

//   return (
//     <>
//       <h1 style={myStyle}>Hello Everybody</h1>
//       <h1 className="text-center display-2">{number}</h1>
//       <div className="text-center">
//          <button onClick={()=>increaseNumber()} className="btn btn-danger btn-lg">Increase Number</button>
//       </div>
//       <p className="display-5 p-4 my-3 text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. A nemo iste autem nesciunt doloribus ipsum corrupti voluptatem iure blanditiis natus alias earum aut tenetur, fugiat mollitia dolores quod recusandae quibusdam.</p>
//       <About/>
//     </>
//   );
// };

// export default App;

import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import About from './components/AboutPage/About'
import LoadPage from './Pages/LoadPage'
import NotFound from './Pages/NotFound'
import FetchData from './Pages/FetchData'
import Formik from './Pages/Formik'
import SignUp from './Pages/SignUp'
import Contact from './components/ContactPage/Contact'

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/effect' element={<LoadPage/>}/>
        <Route path='fetch' element={<FetchData/>}/>
        <Route path='formik' element={<Formik/>}/>
        <Route path='signup' element={<SignUp/>}/>
        <Route path='contact' element={<Contact/>}/>
        {/* <Route path='/contact' element={<About/>}/> */}

        <Route path='*' element={<NotFound/>}/>
      </Routes>
    </>
  )
}

export default App

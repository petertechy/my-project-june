import React, { useEffect, useState } from "react";
import axios from "axios";

const FetchData = () => {
    const endpoint = "https://api.github.com/users"
    const [data, setdata] = useState([])
    const [isLoading, setisLoading] = useState(false)
  const handleData =  () => {
   axios.get(endpoint).then((response)=>{
    //    console.log(response.data)
       setisLoading(true)
        setdata(response.data)
   })
  };

  useEffect(() => {
    handleData()
  },[])
  
  return (
    <>
      <div className="col-7 ps-4">
        <h1>Fetch Data</h1>
        {/* <button className="btn btn-warning btn-lg" onClick={handleData}>Fetch</button> */}
      </div>

     { !isLoading  ?<h1>loading...</h1>  : <div>
        {data.map((item,index)=>(
            <div key={index}>
                <h1>{item.login}</h1>
                <img src={item.avatar_url} alt="" />
            </div>
        ))}
      </div>}
    </>
  );
};

export default FetchData;

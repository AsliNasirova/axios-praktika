import React, { useEffect, useState } from 'react'
import axios from "axios";
import "./index.css"

const Fetch = () => {
    const [data,setData]=useState([])
    const baseUrl="https://northwind.vercel.app/api/products"

    const datalar=async () =>{
        try {
            const response =await axios(baseUrl)
            console.log(data);
            setData(response.data);

        } catch (error) {
            console.log(error);
        }

    }
    useEffect(()=>{
        datalar()
    })
  return (
    <>
    
    <input id="search-box" onChange={filterBySearch} />
    <table>
        <thead>
        <tr>
             <th>name</th>
            <th>categoryId</th>
            <th>unitsInStock</th>
            <th>unitsOnOrder</th>
           
           
        </tr>
        </thead>
       <tbody>
    {data && data.map(item=>
        <tr key={item.id}>

        <td>{item?.name}</td>
        <td>{item?.categoryId}</td>
        <td>{item?.unitsInStock}</td>
        <td>{item?.unitsOnOrder}</td>
    
      </tr>
     
    )} </tbody>
    </table>
    </>
  )
}

export default Fetch

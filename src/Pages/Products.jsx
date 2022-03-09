import axios from 'axios';
import React, { useEffect, useState } from 'react'
import "./Products.css"
import { Link } from 'react-router-dom';

function Products() {
    const [data,setData]=useState([]);
    const [loading,setLoading]=useState(false)
    const getAllProducts=()=>{
        setLoading(true)
        axios({
            method:"get",
            url:"https://fakestoreapi.com/products"
        }).then(res=>setData(res.data))
        .catch(err=>console.log(err))
        .finally(setLoading(false))

    }

    useEffect(()=>{
        getAllProducts()
    },[])
  return (
    <div>
        {loading ? <h2>Loading...</h2>:
        <div>
            {data.map((e)=>(
                <div key={e.id} className='productdiv'>
                    <Link key={e.id} to={`/products/${e.id}`}>{e.title}</Link>
    
             </div>
            ))}
        </div>
        }
    </div>
  )
}

export default Products
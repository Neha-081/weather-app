import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import axios from 'axios'
import "./Products.css"

function ProductDetail() {
    const param=useParams()
    console.log(param);
  const [data,setData]=useState([])

useEffect(()=>{
    axios({
        method:"get",
        url:"https://fakestoreapi.com/products"
    }).then(res=>setData(res.data))
    .catch(err=>console.log(err))


},[param])
console.log(param.productid);

  return (
      <>
    <div>ProductDetail page</div>
    {data.filter(item=>Number(item.id)===Number(param.productid)).map((e)=>(
        <div key={e.id} className="productdiv">
            <h1>{e.title}</h1>
                 <h5>Category : {e.category}</h5>
             <img src={e.image} alt="product"/>
             <p>{e.description}</p>
             <h2>Rating : {e.rating.rate}</h2>
             <h4>$ {e.price}</h4> 
             </div>
    ))}
    </>
  )
}

export default ProductDetail
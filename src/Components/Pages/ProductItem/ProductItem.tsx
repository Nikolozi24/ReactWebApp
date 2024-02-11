
import React, { useEffect, useState } from 'react'
import { Link, Params, useNavigate, useParams } from 'react-router-dom'

function ProductItem() {
  const [productID, setProductId] = useState(useParams().productId || 0 );
  const [Products,setProducts] = useState([{id:'' , category:'', image:''}]);
  const [product, setProduct] = useState({
    id:'',
    title:'',
    image:'',
    category:'',
    description:'',
  }) 
  useEffect(()=>{
      fetch("https://fakestoreapi.com/products").then(res=>res.json()).then(json=>setProducts(json)).then(res=>console.log(Products)) 
  },[])
  useEffect(()=>{
    
    const Url = `https://fakestoreapi.com/products/${productID}` 
    fetch(Url).then(res=>res.json()).then(json=>setProduct(json)).then(res=>console.log(res))
    console.log(product);
  } , [useParams()])
  const navigation  = useNavigate();
  const handleBack=() =>
  { 
    navigation(-1);
  }
  
  const  HandleIdUpdate=(id)=>{
  const {productId } = useParams();
    if(productID!=id ){
        setProductId(id)
    }  
}

  return (
    <div>

    <div className=" w-full  grid grid-cols-7  gap-4 ] grid-rows-1 mb-20 justify-center "> 
     <div> <button  onClick={handleBack} className="border-2 bg-slate-400 p-2 rounded-lg">go Back</button></div>
      <img className="w-full h-full col-start-3 row-span-3 mr-6 p-6 border-2" src = {product.image}/>
      <div className="h-full p-2 items-center col-span-2 row-span-1 text-ellipsis overflow-hidden w-full">

      <h1 className="text-justify "><strong className=" text-justify capitalize first-letter:text-red-500">title:</strong> {product.title}</h1>
      <h1 className="text-justify"><strong className=" text-justify capitalize first-letter:text-red-500">Caregory:</strong> {product.category}</h1>
      <h1 className=""><strong className="capitalize  leading-4">Description:</strong> <span className="text-justify text-lg  font-serif "> {product.description}</span></h1>
      </div>
    </div> 
    <h1 className=" italic text-center font-thin ">All products: </h1>
    <div className=" p-2 border-2 w-3/4 m-auto h-[400px]  overflow-x-scroll ">
      <div className="w-3/4 m-auto grid grid-cols-6 gap-4 ">

        {
          Products.map(item=>{return <div  key={item.id} className=" p-2 w-full  border-solid border-cyan-300 flex flex-col "><Link className='w-full h-full' onClick={(id)=>HandleIdUpdate(item.id)} to={`/${item.id}`}><img className="w-full border-solid border-cyan-200 h-3/4 col-span-1  row-span-1  " src={item.image}/></Link><button className=" bottom-2 border-dotted mt-5 border-cyan-700 bg-green-300  rounded-md flexjustify-center items-center ">Buy</button></div>})
        }
        </div>
    </div>
    </div>
  )
}

export default ProductItem
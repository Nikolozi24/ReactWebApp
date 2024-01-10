import React from 'react'

const Product = ({product}) => {
        const{id , title , image , category , price , description} = product;
  return (
    <div className='grid  grid-cols-2 w-full h-full justify-center items-center '>
      <div>
        <img className='w-30 h-30 p-3  mr-2' src={image}/>
      </div>
      <div className=' grid grid-row-3'>

        <span className='w-full'><span className='font-bold'>TiTle</span>: {title}</span>
        <span className='w-full'><span className='font-bold'>Category:</span> {category}</span>
        <span><span className='font-bold'>Price:</span> {price}</span> 
      </div>
     
      
    </div>
    
  )
}

export default Product
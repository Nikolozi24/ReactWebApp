import { useEffect } from "react";
import React ,{useState} from "react";
import {useForm} from "react-hook-form"
import { Link, useNavigate } from "react-router-dom";
import Product from "../../../Utility/Product/Product.tsx";

type Types = {
    userInput:string
}
  


function Search() {
    const [Productdata, setProductData] = useState([{
        id:"",
        name:'',
        email:'',
        password:'',
    }]);
    const redirect = useNavigate()
    
    useEffect(()=>{
        if(localStorage.getItem("user")==null){
            redirect('/login')
        }    
        const data =   fetch('https://fakestoreapi.com/products').then(res=>res.json())
        .then(json=>setProductData(json)).then(()=>console.log(Productdata))
        
    },[])
 const handleDelete = (id) =>{
        const newData =Productdata.filter(item=>{return item.id !==id })
        setProductData(newData)
      console.log(newData)
    
  }
    const form = useForm<Types>(
        {
            defaultValues:{
                userInput:'',
            }
        }
    
    );
    const {register} = form;
   
    return (
            <div className="flex flex-col justify-center items-center mt-2">
                <form method="POST">
                    <div className="border-2 border-cyan-300 ">

                        <input type="text"
                               className="w-96  p-1 border-solid  "
                               {...register("userInput")}
                               />
                        <input className=" p-1  border-l-2 cursor-pointer bg-gray-300  hover:bg-blue-300"
                               type="submit" 
                               value="search"
                               />   
                     </div>
                </form>
                     <div className=" grid  grid-cols-4">
                       
                            {  
                            Productdata.map( (product)=>(
                                    <div className=" p-2 m-2 border-2 border-solid border-cyan-800 rounded-lg cursor-pointer hover:bg-cyan-300 "key={product.id}><Link to="/"><Product handleDelete={handleDelete}product={product} /></Link></div>

                            )


                            )


                            }


                    



                    </div>

            </div>
  )
}

export default Search
import { TimePicker } from "antd";
import React , {useState} from "react";
import { useEffect } from "react";

import {useForm , SubmitHandler, Form} from "react-hook-form";
import { Link, json, useNavigate } from "react-router-dom";



// input type
type Inputs={
    email:string
    password:string
}

const Login = () => {

// does nothing yet
useEffect(
    ()=>{console.log(localStorage.getItem("userInfo")?.split(',')[1].split(":")[1])}
    ,[] 
)
 //has bug , because localStorage item is not same as data.email   
 // i will fix it later
 const onSumbit=(data:Inputs)=>{
      const info =  localStorage.getItem("userInfo");

      if
      (
        data.email == localStorage.getItem("userInfo")?.split(',')[1].split(":")[1] 
        &&
        data.password == localStorage.getItem("userInfo")?.split(',')[3].split(":")[1]
      )
      {
        redirect("/")
      }
      
    }
    
    const redirect = useNavigate();

    const Login = ['L','o','g','i','n']
    
    const {register , handleSubmit  , formState , getValues} = useForm<Inputs>( {defaultValues:{
        email:'',
        password:'',
    }} );
  
return (
    <div className=" flex justify-center w-full h-[100vh] items-center ">
      <div className=" relative w-1/3 box-border border-0 mt-10  p-4 shadow-mShadow  rounded-lg ">
       <h1 className="text-center flex text-[40px] justify-center items-center font-bold w-full" >{Login.map(character=>(<span className="hover:text-green-300 cursor-pointer">{character}</span>))}</h1>
        <form className="justify-center h-full" onSubmit={handleSubmit(onSumbit)} noValidate>
                                                                 {/* Email input */}
            <input className="border-2 focus:shadow-inputShadow mr-auto ml-auto  text-center rounded-lg block w-3/4  mt-6  border-cyan-400 border-solid p-2 "
                   type="email"
                   placeholder="Email"
                  {...register(
                    "email" , 
                    {
                     pattern:{ // pater for  valid email format
                      value:/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                      message:'Invalid email format',
                    }, 
                    validate:{// validate for bad domain
                        isBlackListed:(fieldvalue)=>{return(!fieldvalue.endsWith("badDomain.com") || "this domain don't supported")}, 
                    },
                    },
                    )
                  } 
            />
                                      {/* print Error message if format is not email*/}  
            { formState.errors.email  && <p className="text-red-700 text-center "> {formState.errors.email?.message}</p>}
                                                          {/* Start of Password input */}
            <input type="password"
                   placeholder="Password"
                   className="border-2 mr-auto focus:shadow-inputShadow ml-auto text-center rounded-lg block w-3/4  mt-6 border-cyan-400 border-solid p-2 "
                   {...register(
                     "password" ,
                     {
                       minLength:{//password min length is 8
                         value:8,
                         message:'password length must be more than 8', 
                        }
                      } 
                      )
                    } 
            />
                {/* password input Error message */}
            {  formState.errors.password  && <p className="text-red-700 text-center"> {formState.errors.password?.message}</p>}
          
          <input className=" text-center hover:text-white font-mono text-[20px] bg-green-200 cursor-pointer block  m-auto mt-5 border-2
                             border-solid rounded-lg p-2 hover:bg-green-400 first-letter:text-red-400"
                 type="submit"
                 value="Log in"
           />
          <div className="text-center p-2">
            <span className="">Have not account? </span>
            <Link className="text-cyan-400" to='/Registration'>Registration</Link>
          </div>
        </form>

      </div> 
   </div>
  )
}

export default Login
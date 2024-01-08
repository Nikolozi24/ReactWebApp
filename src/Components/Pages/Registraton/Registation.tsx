import { TimePicker } from "antd";
import React , {useState} from "react";
import { useEffect } from "react";

import {useForm , SubmitHandler, Form} from "react-hook-form";
import { Link } from "react-router-dom";

type Inputs = {
    username:string
    email:string
    password:string
    confirmPassword:string
}


export const Registration = () => {
  const onSumbit=(data:Inputs)=>{
    
  }

useEffect(
      ()=>{console.log('mounted')}
,[] )
  const {register , handleSubmit  , formState , getValues} = useForm<Inputs>( {defaultValues:{
      username:'',
      email:'',
      password:'',
      confirmPassword:'',
  }} );


// const [showPass, setShowPass] = useState(false);
// const handleShowPass=(e)=>{
//   if(e.target.checked){
//     setShowPass(true)
//   }
//   else{setShowPass(false)}

// }
const Registration = ['R', 'e', 'g','i','s','t','r','a','t' ,'i','o','n']

  return (
    <div className=" flex justify-center w-full h-[100vh] items-center ">
      <div className=" relative w-1/3 box-border border-0 mt-10  p-4 shadow-mShadow  rounded-lg ">
        <h1 className="text-center flex text-[40px] justify-center items-center font-bold w-full" >{Registration.map(character=>(<span className="hover:text-green-300 cursor-pointer">{character}</span>))}</h1>
        <form className="justify-center h-full" onSubmit={handleSubmit(onSumbit)} noValidate>


            <input type="text" placeholder="Username" {...register("username" ,{maxLength:10, required:'Username is required'} )}  className="border-2  focus:shadow-inputShadow text-center mr-auto ml-auto  rounded-lg block w-3/4  mt-6  border-cyan-400 border-solid p-2 "/>
              {
                formState.errors.username&& <p className="text-red-700 text-center "> { formState.errors.username?.message} </p>
               
              }
            <input type="email" placeholder="Email" {...register("email" , {pattern:{
              value:/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
              message:'Invalid email format',
            
            },
            validate:{
              isBlackListed:(fieldvalue)=>{
                return(
                   !fieldvalue.endsWith("badDomain.com") || "this domain don't supported"
                )
              }
            } } )}  className="border-2 focus:shadow-inputShadow mr-auto ml-auto  text-center rounded-lg block w-3/4  mt-6  border-cyan-400 border-solid p-2 "/>
            {
                
                  formState.errors.email  && <p className="text-red-700 text-center "> {formState.errors.email?.message}</p>
                 
                
            }
            <input type="password" placeholder="Password" {...register("password" ,{minLength:{
                value:8,
                message:'password length must be more than 8',
            } } )}  className="border-2 mr-auto focus:shadow-inputShadow ml-auto text-center rounded-lg block w-3/4  mt-6 border-cyan-400 border-solid p-2 "/>
            {
                 
                 formState.errors.password  && <p className="text-red-700 text-center"> {formState.errors.password?.message}</p>
            }
            {/* <input type="checkbox"  onClick={(e)=>handleShowPass(e)} className="border-2 p-2 text-right me-3 w-1/8 " name="checkbox" id="checkbox"/><label htmlFor="checkbox">show password</label> */}
            <input type="password" placeholder="Confirm Password"  {...register("confirmPassword" ,
              {
                minLength:{
                  value:8,
                  message:'password length must be more than 8' ,
                },
                validate:{
                  PasswordMatching:(value)=>{
                    return(
                        value==getValues("password") || "password does not  match!"
                    )
                }
              },
              })
              }
              className="border-2 focus:border-2 focus:shadow-inputShadow focus:border-green-200 mr-auto ml-auto text-center rounded-lg block w-3/4  mt-6  border-cyan-400 border-solid p-2 "/>
            {
                     formState.errors.confirmPassword && <p className="text-red-700 text-center"> {formState.errors.confirmPassword?.message}</p>     
            }
          <input className=" text-center hover:text-white font-mono text-[20px] bg-green-200  cursor-pointer block m-auto mt-5 border-2 border-solid rounded-lg p-2 hover:bg-green-400 first-letter:text-red-400" type="submit" value="Sing up"/>
          <div className="text-center p-2">
            <span className="">Have account? </span><Link className="text-cyan-400" to='/login'>Log in</Link>
          </div>
        </form>

      </div> 
   </div>
  )
}




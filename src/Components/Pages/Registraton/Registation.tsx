
import React  from "react";
import { useEffect } from "react";
import {useForm} from "react-hook-form";
import { Link , useNavigate} from "react-router-dom"; // for routing
import { FacebookShareButton, TelegramShareButton, TwitterIcon, TwitterShareButton} from "react-share";


// TypeScript  to define  input  values data type , constraints e.g
type Inputs = {
    username:string
    email:string
    password:string
    confirmPassword:string
}

export const Registration = ({handleAddUser}) => {  
  /*
  take Destructuring of register for handling input   , handleSubmit for handling form submit   , formState for handling errors , and getValues for handling input values from useForm
  */
  const {register , handleSubmit  , formState , getValues} = useForm<Inputs>({
    defaultValues:
    {
      username:'',
      email:'',
      password:'',
      confirmPassword:'',
    },
    },
  );

  const redirect = useNavigate(); 
/*  handleSubmit Function  create new object and write in users , and save information on localStorage  and then directing to login page */
const OnSumbit=(data:Inputs)=>{
          handleAddUser({id: Math.random()*10000000, username:data.username, email:data.email, password:data.password })
          localStorage.setItem("userInfo" , JSON.stringify(data))
          redirect("/login")
          
  }
  
  
  
  
  



  return (

    <div className=" flex justify-center w-full h-[100vh] items-center ">
      <div className=" relative w-1/3 box-border border-0 mt-10  p-4 shadow-mShadow  rounded-lg ">
        <h1 className="text-center flex text-[40px] justify-center items-center font-bold w-full" >
            Create Account
        </h1> 
         <form className="justify-center h-full" onSubmit={handleSubmit(OnSumbit)} noValidate>
          {/** username input */}
            <input type="text" 
                  className="border-2  focus:shadow-inputShadow text-center mr-auto ml-auto  
                            rounded-lg block w-3/4  mt-6  border-cyan-400 border-solid p-2 "
                  placeholder="Username"
                  {...register(
                     "username" ,
                      {
                        maxLength:10, 
                        required:'Username is required'
                      },
                    )
                  } 
            />
             {/*error massage*/} 
             {formState.errors.username&& <p className="text-red-700 text-center "> { formState.errors.username?.message} </p> }
                    {/* email input */}
            <input type="email"
                   className="border-2 focus:shadow-inputShadow mr-auto ml-auto  text-center rounded-lg block w-3/4  mt-6  border-cyan-400 border-solid p-2 "
                   placeholder="Email" 
                   {...register(
                     "email" ,
                     {
                      pattern:
                      {
                         //A common and widely accepted regex pattern for email validation in JavaScript is /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/ . 
                        value:/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/, 
                        // error message
                        message:'Invalid email format', 
                      },
                      validate:
                        {
                        // if EMail fiels is something like 'example@badDomain.com' the show message ' this domain don't supported' else nothing 
                          isBlackListed:(fieldvalue)=>{
                                return(!fieldvalue.endsWith("badDomain.com") || "this domain don't supported");
                          },
                        },
                     }  
                     )
                    } 
             />
             {/**end of input */}
               {          /// error massage               
                  formState.errors.email  && <p className="text-red-700 text-center "> {formState.errors.email?.message}</p>
               }
              {/**password input */}
            <input  type="password" 
                    className="border-2 mr-auto focus:shadow-inputShadow ml-auto text-center rounded-lg block w-3/4  mt-6 border-cyan-400 border-solid p-2 "
                    placeholder="Password" 
                    {...register(
                      "password",
                      {
                        minLength:{
                          value:8,
                          message:'password length must be more than 8',
                    
                        } 
                      } 
                      )
                    }  
             />
            {
                 formState.errors.password  && <p className="text-red-700 text-center"> {formState.errors.password?.message}</p>
            }

             <input type="password"
                    className="border-2 focus:border-2 focus:shadow-inputShadow focus:border-green-200 mr-auto ml-auto text-center rounded-lg block w-3/4  mt-6  border-cyan-400 border-solid p-2 "
                    placeholder="Confirm Password"
                    {
                      ...register(
                        "confirmPassword" ,
                         {
                          minLength:{ 
                            value:8,// min length is 8
                            message:'password length must be more than 8' , // error message
                          },
                          validate:{
                            PasswordMatching:(value)=>{  // password match handler function
                                return( value==getValues("password") || "Passwords does not  match!")
                            }
                          },
                        }
                        )
                    }
              />
            {
                     formState.errors.confirmPassword && <p className="text-red-700 text-center"> {formState.errors.confirmPassword?.message}</p>     
            }
          <input className=" text-center hover:text-white font-mono text-[20px] bg-green-200  cursor-pointer 
                           block m-auto mt-5 border-2 border-solid rounded-lg p-2 hover:bg-green-400  first-letter:text-red-400"
                 type="submit" 
                value="Sing up"
          />
          </form>
          <div className="text-center p-2" >
              <div className="p-2 my-2">
                <span className=" my-2 ">Have account? </span><Link className="text-cyan-400 hover:text-white hover:bg-green-400" to='/login'>Log in</Link>
              </div>

              <span>
              share with Friends:
              </span>

            <FacebookShareButton  hashtag="Test" title="Share" url="facebook.com" >
              <span className=" border-2 bg-blue-400 text-white p-1 rounded-lg">facebook </span>
            </FacebookShareButton>

            <TwitterShareButton url="facebook.com" title="Share">
              <span className=" border-2 bg-black text-white p-1 rounded-lg">twitter </span>
            </TwitterShareButton>

          </div>
      </div> 
   </div>
  )
}





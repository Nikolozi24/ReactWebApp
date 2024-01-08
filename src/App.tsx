import React from 'react'
import {Routes,Route , Link  } from 'react-router-dom'
import { Layout , Typography , Space } from 'antd';
import Navbar from './Components/Navbar/Navbar';
import {Registration} from "./Components/Pages/Registraton/Registation.tsx"

import { Login } from './Components/Pages/Login/Login.tsx';

const App = () => {
  return (
    <div className='app'>
        <Routes>
        <Route path='/' element={(<h1 className='text-center text-[90px]'>Hello WOrld</h1>)}/>
        <Route  path='/Registration' element={<Registration/>}/>
        <Route path='/Login' element={<Login/>}/>
        </Routes>

    </div>
  );
}

export default App
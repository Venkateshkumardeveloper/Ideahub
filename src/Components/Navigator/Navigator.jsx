import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Homepage from '../Homepage/Homepage'
import Ideahub from '../Ideahub/Ideahub'
import Signin from '../Signinpages/Signin'
import Signup from '../Signuppages/Signup'


const Navigator = () => {
  return (
    <>
        <div>
            <Routes>
              <Route path="/" element={<Signin />}/>
              <Route path="/signup" element={<Signup />}/>
                <Route path="/home" element={<Homepage/>} />
                <Route path="/ideahub" element={<Ideahub/>} />
            </Routes>
        </div>

    </>
  )
}

export default Navigator
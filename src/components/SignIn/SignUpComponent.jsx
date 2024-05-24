import React from 'react'
import { SignUp } from "@clerk/clerk-react"

const SignUpComponent = () => {
  return (
    <div className='center' style={{zIndex: 0}} >
      <SignUp />
    </div>
  )
}

export default SignUpComponent

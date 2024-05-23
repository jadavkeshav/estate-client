import React from 'react'
import { SignIn } from "@clerk/clerk-react"

const SignInComponent = () => {
  return (
    <div className='center' style={{zIndex: 0}} >
      <SignIn />
    </div>
  )
}

export default SignInComponent

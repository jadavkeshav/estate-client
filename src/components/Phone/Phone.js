import React from 'react'
import {PhoneInput} from "react-phone-input-2"
import 'react-phone-input-2/lib/style.css'
const Phone = () => {
  return (
    <div>
      <PhoneInput 
        country={"US"}
      />
    </div>
  )
}

export default Phone

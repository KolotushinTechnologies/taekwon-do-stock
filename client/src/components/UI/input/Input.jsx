import React from 'react'

const Input = (props) => {
  return (
    <input className='bg-[color:var(--input-color)] rounded-[30px]' style={{ boxShadow: "inset 0px 0px 10px rgba(0,0,0,0.5)" }} {...props}/>
  )
}

export default Input

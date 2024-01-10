"use client"

import React from 'react'

const CustomButton = () => {
  return (
    <button
        disabled={false}
        type={'button'}
        className={`custom-btn`}
        onClick={()=>{console.log('hello')}}
    >
        CustomButton
    </button>
  )
}

export default CustomButton
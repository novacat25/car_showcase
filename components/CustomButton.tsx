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
      <span className={`flex-1`}>
        CustomButton
      </span>
    </button>
  )
}

export default CustomButton
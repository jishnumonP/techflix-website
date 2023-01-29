import React, { useEffect, useRef, useState } from 'react'


import './content.css'
export const CustomButton = (props) => {


  return (

 
      <div className="content">
       
        <button className='btn btn-2'  onClick={()=>props.navigate} >
{props.title}
</button>

      </div>
  )
}

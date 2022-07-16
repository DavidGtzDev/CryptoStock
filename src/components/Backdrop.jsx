import React from 'react'

export default function Backdrop(props) {
  let disp = "none"
  if(props.isOpen){
    disp = "block"
  }
  return (
    <div className='backdrop' style={{display: disp}}>
        {props.child}
    </div>
  )
}

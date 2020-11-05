import React from 'react'

export default function Box({handelInput}) {
  return (
    <div>
      <input
      onChange ={handelInput}
      type="text"/>
    </div>
  )
}

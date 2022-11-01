import React from 'react'
import { useLocation } from 'react-router-dom'

const List = (props) => {
    const location = useLocation();
    const state = Object.entries(location.state)
    console.log(Object.entries(state))

  return (
    <div>
        <ul>
            {state.map((element)=>{
               return (
                <div>{element}</div>

               )
            })}
        </ul>
    </div>
  )
}

export default List
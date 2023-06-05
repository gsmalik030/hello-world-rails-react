import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchGreeting } from '../redux/greetingsSlice'

const Greetings = () => {
    const dispatch = useDispatch()
    const { greeting} = useSelector((state) => state.greetings)
    console.log(greeting)
  return (
    <div>
      
    </div>
  )
}

export default Greetings

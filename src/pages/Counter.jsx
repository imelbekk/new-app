import React from 'react'
import {  useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from '../features/counter/counterSlice'

export default function Counter() {
    const count = useSelector((state)=> state.counter.count)
    const dispatch = useDispatch()
  return (
    <div>
        <h1>count : {count}</h1>
        <button onClick={()=>dispatch(increment())}>+</button>
        <button onClick={()=>dispatch(decrement())}>-</button>
    </div>
  )
}

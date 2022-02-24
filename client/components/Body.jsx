import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { fetchFruits } from '../actions'

function Body () {
  const fruits = useSelector(state => state.fruits)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchFruits())
  }, [])

  return (

    <div>
      <h1>Body</h1>
      <ul>
        {fruits.map(fruit => (
          <li key={fruit}>{fruit}</li>
        ))}
      </ul>
    </div>
  )
}

export default Body
import React, {useReducer} from 'react'

const initialState = 0
const reducer = (currentstate, action) => {
    switch(action){
        case 'add_1':
            return currentstate + 1
        case 'multiple_3':
            return currentstate * 3
        case 'reset':
            return initialState
        default:
            return currentstate
    }
}
const BasicReducer = () => {
    const [count, dispatch] = useReducer(reducer, initialState)
  return (
    <div>
            <div>Count{count}</div>

            <button onClick={()=> dispatch('add_1')}>add_1</button>
            <button onClick={()=> dispatch('multiple_3')}>multiple * 3</button>
            <button onClick={()=> dispatch('reset')}>reset</button>
        
    </div>
  )
}

export default BasicReducer
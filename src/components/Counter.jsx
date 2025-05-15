import React, { useState} from 'react'

const Counter = ({stock, counter, setCounter}) => {
    const quitar = () =>{
        setCounter(counter - 1)
    }

    const agregar = () =>{
        setCounter(counter + 1)
    }
    
    return (
        <div>
            <button onClick={quitar} disabled={counter == 0}> - </button>
            <h4>{counter}</h4>
            <button onClick={agregar} disabled={counter >= stock}> + </button>
        </div>
    )
}

export default Counter
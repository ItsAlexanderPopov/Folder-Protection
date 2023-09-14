import React from 'react'
import { LuDelete } from 'react-icons/lu'
import { RxEnter } from 'react-icons/rx'

const Numpad = ({handleInput, handleDelete, handleSubmit, playSound}) => {
  return (
    <div className='numpad'>
        <div>
            <button type="button" onClick={() => handleInput(1)}>
                1
            </button>
            <button type="button" onClick={() => handleInput(2)}>
                2
            </button>
            <button type="button" onClick={() => handleInput(3)}>
                3
            </button>
        </div>
        <div>
            <button type="button" onClick={() => handleInput(4)}>
                4
            </button>
            <button type="button" onClick={() => handleInput(5)}>
                5
            </button>
            <button type="button" onClick={() => handleInput(6)}>
                6
            </button>
        </div>
        <div>
            <button type="button" onClick={() => handleInput(7)}>
                7 
            </button>
            <button type="button" onClick={() => handleInput(8)}>
                8 
            </button>
            <button type="button" onClick={() => handleInput(9)}>
                9
            </button>
        </div>
        <div>
            <button type="button" className='icon-btn' onClick={handleDelete}>
                    <LuDelete/>
            </button>
            <button type="button" className='btn-0' onClick={() => handleInput(0)}>
                    0 
            </button>
            <button type='button' className='icon-btn' onClick={handleSubmit}>
                    <RxEnter/>
            </button>
        </div>
    </div>
  )
}

export default Numpad
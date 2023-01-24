import React from 'react'
import MyButton from './UI/MyButton'

export default function Header({addNewCard, sortCardArray}) {
  return (
    <div className='header'>
     
        <MyButton onClick={addNewCard}>
            Add Card
        </MyButton>
        
      
        <MyButton onClick={sortCardArray}>
            Sort Cards
        </MyButton>

    </div>
  )
}

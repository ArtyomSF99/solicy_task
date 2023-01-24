import React from 'react'

export default function CardList({cardArray, deleteCard}) {
    const testArray = [{id:1, number:5},{id:2, number:5},{id:3, number:5},{id:4, number:5},{id:5, number:7},{id:6, number:7},{id:7, number:7},{id:8, number:7},{id:9, number:7},{id:10, number:7},]
  return (
    <div className='card_list_main'>
    {cardArray.map(el => (
        <div key={el.id} className="card_container">
        {el.number}
        <img onClick={() => deleteCard(el)} src='/img/close.png' className='card_close' alt='close'/>
        </div>
    ))}
    </div>
  )
}

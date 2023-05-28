import React from 'react'

export default function CardAlbum( {numeAlbum, pic, trList}) {
  return (
    <div className='albumCard'>
           
              <h3>{numeAlbum}</h3>
              <div className='albumimg'>
              <img  src={require(`../images/${pic}.jpg`)} alt={numeAlbum}/>  
              </div>
                <div className='trList'>
                 {trList}   
                </div>  
      
    </div>
  )
}
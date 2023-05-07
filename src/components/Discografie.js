import React from 'react'
import AlbumList from './AlbumList'

export function Discografie() {
  return (
    <>
        <div className='titlu'>
          <h1>Discografie</h1>
        </div>
        <div className='continut'>
        <div className='continutPrim'>
           <div ><AlbumList/></div>
         </div>
      </div>
        
    </>
  )
}
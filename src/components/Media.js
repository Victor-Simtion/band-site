import React from 'react'
import Poze from '../data/PozeMedia.json'

export function Media() {
  return (
    <>
      <div className='titlu'>
        <h1>Media</h1>
      </div>
      <div className='continut'>
            <div className='continutPrim'>
              <p>Eu velit qui ad consectetur veniam ipsum tempor dolore incididunt quis irure nisi ex cupidatat. Laborum do consectetur ullamco id eu excepteur duis tempor eiusmod nisi. Adipisicing aliqua minim in reprehenderit veniam proident ad commodo reprehenderit minim sunt.</p>
                  <div className='mediaGrid'>
                    {Poze && Poze.map(poze=>(
                      <a href='http://dummyimage.com'>
                      <img className='mediaPic' key={poze.id} alt={poze.id} src = {`http://dummyimage.com/${poze.poza}`}/> 
                      </a>
                    ))}
                  </div>
            </div>
      </div>
    </>
  )
}
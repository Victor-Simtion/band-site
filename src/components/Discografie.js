import React from 'react'
import Album from '../data/Album.json'; 
import CardAlbum from './CardAlbum';


export function Discografie() {
  return (
    <>
        <div className='titlu'>
          <h1>Discografie</h1>
        </div>
        <div className='continut'>
        <div className='continutPrim'>
              <div >
            {
              Album && Album.map(album =>(
                  <CardAlbum key={album.id}
                    numeAlbum={album.name}
                    pic={album.pic}  
                    trList = {album.trList && album.trList.map(el=>(<p>{el}</p>))}
                  />  
                
              ))
            }
          
          </div>
         </div>
      </div>
        
    </>
  )
}
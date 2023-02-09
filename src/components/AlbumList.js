import React from 'react'
import Album from '../data/Album.json';


export default function AlbumList() {
  return (
    <div className='content'>
      {
        Album && Album.map(album =>(
            <div key={album.id}>
              <h3>{album.name}</h3>
              <img alt='img' height={200} src={require(`../images/${album.pic}.jpg`)} />
              {album.trList && album.trList.map(el=>(<p>{el}</p>)
        )}
            </div>  
           
        ))
      }
    
    </div>
  )
}

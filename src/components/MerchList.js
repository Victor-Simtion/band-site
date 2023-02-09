import React from 'react'
import Tricouri from '../data/Tricouri.json'
import Accesorii from '../data/Accesorii.json'
import Albumuri from '../data/Albumuri.json'

export default function MerchList() {
  return (
    <>
        {
          Tricouri && Tricouri.map(tricou =>(
            <div key={tricou.id}>
                <h3>{tricou.nume}</h3>
                <img alt='img' height={200} src={require(`../images/${tricou.pic}.jpg`)} />
                <p>Pret {tricou.pret}</p>
                <p>marime</p>
                <p>{tricou.marimi && tricou.marimi.map(el=>(
                   <input type='radio' id={el} value={el} name='marime'/>
                  ))}
                </p>
                
                <button className='buton'>Vizualizare</button>
                <button className='buton'>Adauga in cos</button>
            </div>
          )     
        )}
     {
          Accesorii && Accesorii.map(accesoriu =>(
            <div key={accesoriu.id}>
                <h3>{accesoriu.nume}</h3>
                <img alt='img' height={200} src={require(`../images/${accesoriu.pic}.jpg`)} />
                <p>Pret {accesoriu.pret}</p>
                <button className='buton'>Vizualizare</button>
                <button className='buton'>Adauga in cos</button>
            </div>
          )     
        )}
         {
          Albumuri && Albumuri.map(albums =>(
            <div key={albums.id}>
                <h3>{albums.nume}</h3>
                <img alt='img' height={200} src={require(`../images/${albums.pic}.jpg`)} />
                <p>Pret {albums.pret}</p>
                <div>
                    <button className='buton'>Vizualizare</button>
                    <button className='buton'>Adauga in cos</button>
                </div>
            </div>
          )     
        )}
    </>
)}

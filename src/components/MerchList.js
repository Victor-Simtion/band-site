import React from 'react'
import Tricouri from '../data/Tricouri.json'
import Accesorii from '../data/Accesorii.json'
import Albumuri from '../data/Albumuri.json'
import { Link } from 'react-router-dom'

export default function MerchList() {
  return (
    <>
        {
          Tricouri && Tricouri.map(tricou =>(
            <div key={tricou.id}>
                <h3>{tricou.nume}</h3>
                <img alt='img' height={200} src={require(`../images/${tricou.pic}.jpg`)} />
                {!tricou.oferta ?
                <p>Pret {tricou.pret}</p>: <p>Pret Promotional {tricou.pret}</p>}
                <p>marime</p>
                <div>{tricou.marimi && tricou.marimi.map(el=>(
                  <span>
                   <input style={{accentColor:'orange'}} type='radio' id={el} value={el} name= {`marime${tricou.id}`}/>
                   <label htmlFor={el}>{el}</label>
                  </span>
                  ))}
                {!tricou.disponibil && 
                  <p>stoc epuizat</p>}
                </div>
                
                <Link className='buton' to='/Merch/Produs'>Vizualizare</Link>
                <button className='buton'>Adauga in cos</button>
            </div>
          )     
        )}
     {
          Accesorii && Accesorii.map(accesoriu =>(
            <div key={accesoriu.id}>
                <h3>{accesoriu.nume}</h3>
                <img alt='img' height={200} src={require(`../images/${accesoriu.pic}.jpg`)} />
                {!accesoriu.oferta ?
                <p>Pret {accesoriu.pret}</p>: <p>Pret Promotional {accesoriu.pret}</p>}
                {!accesoriu.disponibil && 
                  <p>stoc epuizat</p>}
                <Link className='buton' to='/Merch/Produs'>Vizualizare</Link>
                <button className='buton'>Adauga in cos</button>
            </div>
          )     
        )}
         {
          Albumuri && Albumuri.map(albums =>(
            <div key={albums.id}>
                <h3>{albums.nume}</h3>
                <img alt='img' height={200} src={require(`../images/${albums.pic}.jpg`)} />
                {!albums.oferta ?
                <p>Pret {albums.pret}</p>: <p>Pret Promotional {albums.pret}</p>}
                {!albums.disponibil && 
                  <p>stoc epuizat</p>}
                <div>
                    <Link className='buton' to='/Merch/Produs'>Vizualizare</Link>
                    <button className='buton'>Adauga in cos</button>
                </div>
            </div>
          )     
        )}
    </>
)}

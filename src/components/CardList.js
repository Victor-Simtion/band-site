import React from 'react'
import Tricouri from '../data/Tricouri.json'
import SmallCard from './SmallCard'
import Albumuri from '../data/Albumuri.json'

export default function CardList() {

    return (
   
   
   <>  
     {
        Tricouri && Tricouri.map(tricou => (  
        <SmallCard key={tricou.id}
             nume={tricou.nume}
             tip={tricou.tip}
             pret={tricou.pret}
             pic={tricou.pic}/>
          ))}

{
        Albumuri && Albumuri.map(album => (  
        <SmallCard key={album.id}
             nume={album.nume}
             tip={album.tip}
             pret={album.pret}
             pic={album.pic}/>
          ))}

    </>
    
    )}
//     {
//      Accesorii && Accesorii.map(accesoriu => (
//        <div key={accesoriu.id}>
//          <h3>{accesoriu.nume}</h3>
//          <img alt='img' height={200} src={require(`../images/${accesoriu.pic}.jpg`)} />
//          {!accesoriu.oferta ?
//            <p>Pret {accesoriu.pret}</p> : <p>Pret Promotional {accesoriu.pret}</p>}
//          {!accesoriu.disponibil &&
//            <p>stoc epuizat</p>}
//          <Link className='buton' to='/Merch/Produs'>Vizualizare</Link>
//          <button className='buton'>Adauga in cos</button>
//        </div>
//      )
//      )}

            
   

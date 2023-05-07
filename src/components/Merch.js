import React, { useState } from 'react'
import SmallCard from './SmallCard'
import Produse from '../data/Produse.json'
import { Link } from 'react-router-dom'




export function Merch() {

  const [search, setSearch] = useState('')
  const [filtruCategorie, setFiltruCategorie] = useState('all')
  const [filtruCautare, setFiltruCautare] = useState('')
  console.log(filtruCautare)

const arataProdus = (produs) => {
    produs && produs
      .filter((produs) => {
        return search.toLowerCase() === "" ? produs : produs.nume.toLowerCase().includes(search);
      })
      .map(produs => (
        <SmallCard key={produs.id}
          nume={produs.nume}
          tip={produs.tip}
          pret={produs.pret}
          pic={produs.pic} />
      ))
  }


  function filtrareCategorie(filtruCategorie) {
    console.log(filtruCategorie)
    let produs = filtrareCategorie
    

    if (filtruCategorie == "tricouri") {
      
      return produs;
    } else {
      if (filtruCategorie == "albume") { 
        // console.log("arata album")
        return produs;
      } else {
        if (filtruCategorie == "accesorii") {
          // console.log("arata accesorii")
          return produs;
        }
        else {
          if (filtruCategorie == "all") {
            // console.log("arata tot")
          }
        }
      }
    }
    console.log(`arata ${produs}`)
  }



  return (
    <>
      <div className='titlu'>
        <h1>Produse</h1>
      </div>

      <div className='content'>
        <div className='filtrare'>
          <input type='text'
            onChange={(e) => setSearch(e.target.value)}
            placeholder='Cautati aici...'>

          </input>
          <div className='filtre'>
            <select onChange={(e) => setFiltruCategorie(e.target.value)}>
              <option value="all">Toate produsele</option>
              <option value="Tricouri">Tricouri </option>
              <option value="albume"> Albume</option>
              <option value="accesorii" > Accesorii</option>
            </select>
            <select onChange={(e) => setFiltruCautare(e.target.value)}>
              <option value="nou">Noutati</option>
              <option value="polupare">Cele mai polupare</option>
              <option value="relevanta">Relevanta</option>
              <option value="pretCrescator">Pret Crescator</option>
              <option value="pretDescrescator">Pret Descrescator</option>
              <option value="reduceri">Oferte</option>
            </select>
          </div>

        </div>
       
        <div className='produse'>
       {
         Produse && Produse
      .filter((produs) => {
        return search.toLowerCase() === "" ? produs : produs.nume.toLowerCase().includes(search);
      })
      .map(produs => (
        <SmallCard key={produs.id}
        nume={produs.nume}
        tip={produs.tip}
        pret={produs.pret}
        pic={produs.pic}
         />
        ))
      }
      </div>


        <div className='merchNav'>
          <Link className='navButon' to="Cos">Vizualizare Cos</Link>
        </div>
      </div>
    </>
  )
}
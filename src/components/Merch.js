import React from 'react'
import {Link } from "react-router-dom";
import MerchList from './MerchList';

export function Merch() {
  return (
  <>
    <div className='titlu'>
      <h1>Produse</h1>
    </div>

   <div className='content'>
      <div className='filtrare'>
          <input type='text' placeholder='Cautati aici...'/>
            <div className='filtre'>
            <select>
              <option  value="all">Toate produsele</option>
              <option  value="tricouri">Tricouri </option>
              <option  value="albume"> Albume</option>
              <option  value="accesorii"> Accesorii</option>
              <option value="nou">Noutati</option>
            </select>
            <select>
              <option value="relevanta">Relevanta</option>
              <option value="pretCrescator">Pret Crescator</option>
              <option value="pretDescrescator">Pret Descrescator</option>
              <option value="polupare">Cele mai polupare</option>
              <option value="reduceri">Oferte</option>
            </select>
            </div>
      
      </div>

      <MerchList/>
      
      <div className='merchNav'>
      <button className='button'>Pagina umratoare</button>
      <button className='button'>Pagina precedenta</button>
      </div>
  </div> 
  </>
  )
}
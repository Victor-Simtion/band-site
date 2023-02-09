import React from 'react'

export function Add() {
  return (
    <>
      <div className='titlu'>
            <h1>Reclama ta aici</h1>
      </div>
    
        <div className='continut'>
            <div> <textarea className='feedBack' placeholder="Date oferta /facturare"/></div>
            <form>
                <ul>
                    <li>Nume: <input type="text" name="Nume"/></li>
                    <li>Email: <input type="email"  name="email" required/></li>
                    <li>Telefon:<input type="text" required/></li>
                    <li>Fax:<input type="text" required/></li>

                </ul>
            </form>
            <div>
                <button className='buton'>Trimite cerere</button>
            </div>
        </div>
    </>
  )
}
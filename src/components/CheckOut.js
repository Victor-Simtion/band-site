import React from 'react'
import {Link,} from "react-router-dom";

export function CheckOut() {
  return (
    <>
        <div className='titlu'>
            <h1>Finalizare comanda</h1>
        </div>
        
        <div className='continut'>
            <form>
              <ul>
                  <li>Nume: <input type="text" name="Nume" required/></li>
                  <li>Prenume: <input type="text" name="Prenume" required/></li>
                  <li>Email: <input type="email"  name="email" required/></li>
                  <li>Telefon:<input type="text" required/></li>
                  <li> <h3>Adresa</h3></li>
                  <li> Strada:<input type="text" required/></li> 
                  <li> Nr.:<input type="text" required/></li>
                  <li> Bloc: <input type="text" required/></li>
                  <li>Scara: <input type="text" required/></li>
                  <li> Etaj:<input type="text" required/></li>
                  <li> Apartament:<input type="text" required/></li>
                  <li> Judet<input type="text" required/></li>
                  <li> Oras<input type="text" required/></li>
                  
                  <li> <input type="checkbox"/>Am citit si sunt de acord cu termenii si conditiile</li>
                  <li> <input type="checkbox"/>Abonare newsletter</li>
              </ul>
            </form>
            <div>
                <button className='buton'>Plaseaza comanda</button>
            </div>
            <div className='merchNav'>
                <ul>
                    <li><Link className='button' to="Cos">Inapoi la Cos</Link></li>
                    <li><Link className='button' to="/Merch">Inapoi la cumparaturi</Link></li>
                </ul>
            </div>
        </div>
    </>
  )
}
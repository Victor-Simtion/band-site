import React from 'react'
import {Link,} from "react-router-dom";


export function Produs() {
  return (
    <>
        <div className='titlu'>
            <h1> Produs</h1>
        </div>

            <div className='continut'>
                   

            <div className='merchNav'>
                <ul>
                    <li><Link className='button' to="CheckOut">Finalizare Comanda</Link></li>
                    <li><Link className='button' to="Cos">Vizualizare Cos</Link></li>
                    <li><Link className='button' to="Merch">Inapoi la cumparaturi</Link></li>
                </ul>
            </div>
        </div>
    </>
  )
}
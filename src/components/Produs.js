import React from 'react'
import {Link,} from "react-router-dom";

export function Produs() {
  return (
    <>
        <div className='titlu'>
            <h1> Produs</h1>
        </div>

            <div className='continut'>
                <h3>Descriere produs</h3>
                <p>Ipsum mollit culpa culpa mollit. Sit deserunt enim et aute ea cillum nostrud deserunt nulla Lorem consequat pariatur ullamco consectetur. Labore fugiat sunt voluptate dolor ea esse esse consequat nostrud adipisicing consequat non non.

Duis dolore non irure ullamco et sit irure velit. Veniam commodo laboris adipisicing culpa adipisicing officia eiusmod cupidatat. Proident id ea reprehenderit duis do est Lorem sint ipsum ipsum dolore nulla. Ea ullamco do voluptate duis. In Lorem dolor laborum occaecat ea. In do pariatur non ad veniam dolor.</p>

            <div>
                <button className='buton'>Adauga in cos</button>
            </div>

            <div className='merchNav'>
                <ul>
                    <li><Link className='button' to="CheckOut">Finalizare Comanda</Link></li>
                    <li><Link className='button' to="Cos">Vizualizare Cos</Link></li>
                    <li><Link className='button' to="/Merch">Inapoi la cumparaturi</Link></li>
                </ul>
            </div>
        </div>
    </>
  )
}
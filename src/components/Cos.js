import React from 'react'
import {Link } from "react-router-dom";

export function Cos() {
  return (
    <>
        <div className='titlu'>
            <h1> Cos Produse</h1>
        </div>

        <div className='content'>
            <div className='merchNav'>
              <ul>
                  <Link className='button' to="CheckOut">Finalizare Comanda</Link>
                  <Link className='button' to="/Merch">Inapoi la cumparaturi</Link>
              </ul>
            </div>
        </div>
    </>
  )
}
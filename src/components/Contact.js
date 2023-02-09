import React from 'react'

export function Contact() {
  return (
    <>
      <div className='titlu'>
            <h1>Contact</h1>
      </div>
    
        <div className='continut'>
            <div> <textarea className='feedBack' placeholder="Scrie-ne aici..."/></div>
            <form>
                <ul>
                    <li>Nume: <input type="text" name="Nume"/></li>
                    <li>Email: <input type="email"  name="email" required/></li>
                    <li> <input type="checkbox"/>Am citit si sunt de acord cu termenii si conditiile</li>
                    <li><input type="checkbox"/>Abonare newsletter</li>
                </ul>
            </form>
            <div>
                <button className='buton'>Trimite</button>
            </div>
        </div>
    </>
  )
}
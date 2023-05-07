import React from 'react';
import turnee from "../data/Turneu.json"


export function Concerte() {
  
  turnee.map( turneu =>
    turneu.data=new Date(turneu.data)
  );
  turnee.sort((a, b) => a.data - b.data)

  return (
  <>
      <div className='titlu'>
        <h1>Concerte</h1>
      </div>
      <div className='continut'>
        <div className='continutPrim'>

      {
        
        <table  className="table table-hover table-dark">
              <thead className="thead-dark">
                <tr>
                  {/* <th scope="col">#</th> */}
                  <th scope="col">Tara</th>
                  <th scope="col">Locatie</th>
                  <th scope="col">Data</th>
                  <th scope="col">Bilete</th>
                </tr>
              </thead>
              
              <tbody>

                {turnee && turnee.map(turneu =>(
                  
                  <tr className='bilete' key={turneu.id}>
                       {/* <th scope="row">{turneu.id+1}</th> */}
                      <td>{turneu.tara}</td> 
                      <td>{turneu.locatie}</td>
                      <td>{turneu.data.toLocaleString(['en-GB'], {year: 'numeric', month: 'numeric', day: 'numeric'})}</td>
                      <td>
                        <a className='bilete' href= {`http://${turneu.bilete}`} >Cumapra bilet</a>
                      </td>
                    </tr>
           
           
           ))}
                </tbody>
            </table>  
      }
    
      </div>
    </div>
  </> 
  )
}
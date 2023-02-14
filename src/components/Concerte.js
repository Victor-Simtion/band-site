import React from 'react';
import Truneu from "../data/Turneu.json"
import {Table} from 'react-bootstrap';

export function Concerte() {
  return (
  <>
      <div className='titlu'>
        <h1>Concerte</h1>
      </div>
      <div className='continut'>
      {
        
            <table  className="table table-hover table-dark">
              <thead className="thead-dark">
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Tara</th>
                  <th scope="col">Locatie</th>
                  <th scope="col">Data</th>
                  <th scope="col">Bilete</th>
                </tr>
              </thead>
              
              <tbody>

                {Truneu && Truneu.map(truneu =>(
                  
                  <tr className='bilete' key={truneu.id}>
                       <th scope="row">{truneu.id+1}</th>
                      <td>{truneu.tara}</td> 
                      <td>{truneu.locatie}</td>
                      <td>{truneu.data}</td>
                      <td>
                        <a className='bilete' href= {`http://${truneu.bilete}`} >Cumapra bilet</a>
                      </td>
                    </tr>
           
           
                  ))}
                </tbody>
            </table>  
      }
    
    </div>
  </> 
  )
}
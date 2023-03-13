import './App.css';

import {Link, Route, Routes,} from "react-router-dom";
import {Home} from "./components/Home";
import { Merch } from './components/Merch';
import { Concerte } from './components/Concerte';
import { NotFound } from './components/NotFound';
import { Discografie } from './components/Discografie';
import { Media } from './components/Media';
import { Cos } from './components/Cos';
import { CheckOut } from './components/CheckOut';
import { Produs } from './components/Produs';
import { Contact } from './components/Contact';
import { Add } from './components/Add';
import NewsCard from './components/NewsCard';
import AddCard from './components/AddCard';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  
  return (   
    <div className='Body'>
      <nav className='navigatie'>
        <ul>
          <li><Link className='navButon' to="/">Home</Link></li>
          <li><Link className='navButon' to="/Discografie">Discografie</Link></li>
          <li><Link className='navButon' to="/Concerte">Concerte</Link></li>
          <li><Link className='navButon' to="/Media">Media</Link></li>
          <li><Link className='navButon' to="/Merch">Magazin</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home/>}/>   
        <Route path="/Discografie" element={<Discografie/>}/>
        <Route path="/Concerte" element={<Concerte/>}/>
        <Route path="/Media" element={<Media/>}/>
        <Route path="/Merch" element={<Merch/>}/>
        <Route path='/Merch/Cos' element={<Cos/>}/>
        <Route path='/Merch/Cos/Checkout' element={<CheckOut/>}/>
        <Route path="*" element={<NotFound/>}/>
        <Route path='/Merch/Produs' element={<Produs/>}/>
        <Route path='/Contact' element={<Contact/>}/>
        <Route path='/Add' element={<Add/>}/>

      </Routes>

      <div className='Stiri'>
          <h2>Stiri</h2>
          
            <NewsCard/>

            {/* <a href ="https://www.google.ro/imghp?hl=en&ogbl" >
              <img className='stiriImg' alt='img' 
                    height='150px'
                  src='https://gratisography.com/wp-content/uploads/2023/01/gratisography-frog-racer-free-stock-photo-800x525.jpg'/>
            </a>*/}
          
      </div>


      <div className='Adds'>
          <div><Link className='addButon' to="Add">Reclama ta aici</Link></div>
          <div>   
            <AddCard/>
          </div>
          <div><Link className='addButon' to="Add">Reclama ta aici</Link></div>

      </div>

      <div id='footer'>
        <Link className='fbuton' to="Contact">Contact</Link>
        &copy; Victor 2023
      </div>

  </div>
  );
}

export default App;

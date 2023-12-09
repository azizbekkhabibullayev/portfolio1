
import React from 'react';
import './App.css'


import { MdClear } from "react-icons/md";
 
import { useState } from 'react';

function App() {
  

const [div, setdiv] = useState('collapse navbar-collapse')
const[div1,setdiv1]= useState('navbar-toggler d-none ')
const [ div2,setdiv2]=useState('navbar-toggler')

let open= ()=>{
setdiv('collapse navbar-collapse d-flex')
setdiv1('navbar-toggler d-flex')
setdiv2('navbar-toggler d-none')


}
let open2= ()=>{
setdiv('collapse navbar-collapse d-none ')
setdiv1('navbar-toggler d-none')
setdiv2('navbar-toggler d-flex')


}
if ('container-fluid'.width<990){
  setdiv1('navbar-toggler d-none')
setdiv2('navbar-toggler d-none')
};
 return(
    <>
     <div className='container-fluid'>
    <nav className="navbar navbar-expand-lg bg-body-tertiary bg-white">
    <a className="navbar-brand" href="./app.js">Azizbek</a>
    <button onClick={open}  className={div2} type="button" data-bs-toggle="collapse" data-bs-target="./app.jsnavbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
     <button onClick={open2}  className={div1} type="button" data-bs-toggle="collapse" data-bs-target="./app.jsnavbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
     <span ><MdClear /></span>
    </button>
    <div className={div} id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="./app.js">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="./app.js">servises</a>
        </li>
        
        <li className="nav-item">
          <a className="nav-link disabled" href="./app.js"  aria-disabled="true">Disabled</a>
        </li>
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2 " type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
</nav>
</div>
    </>
 )

 
}
export default App;


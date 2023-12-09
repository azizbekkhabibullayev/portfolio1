import React from "react";
import './App.css'
import { useState } from "react";



function App2(){
    const [main,setMain]=useState('main2')
    const [pg,setPg]=useState('main3')
    const [load,setLoad]= useState('main3')
    const [wet, setWet]=useState('container text-muted mx-auto text-center d-none')
    const [block,setBlock] = useState('d-none')
    const [n, setN] = useState("my-5 color-red d-none")
    let nextPage=()=>{
        setMain('main3')
        setPg('main2')
    }
    let oldpage=()=>{
        setPg('main3')
        setMain('main2')
    }
    let loading=()=>{
        setMain('main3')
        setPg('main3')
        setLoad('lds-roller')
        setTimeout(()=>{
            setLoad('main3')
            setBlock('d-flex')
            setWet('container text-muted mx-auto text-center ')
            alert('Siz royxatdan odnigiz')
           
        },3000)
    }
    let a =()=>{
        setTimeout(()=>{setN("my-5 color-red d-none")},2000)
    }
    let ax =()=>{
          setMain('main3')
        setPg('main3')
        setLoad('lds-roller')
        setTimeout(()=>{
            setLoad('main3')
            setBlock('d-flex')
            setWet('container text-muted mx-auto text-center ')
            setN("my-5 color-red d-flex")
            a()
           
        },6000)
        

    }


   

    return(
        <>
        <div className="container-fluid">
    <div  className="main">
    <h1 className={n}> No results</h1>
        <div className={wet}>
   <h1 className="my-5"> Weather</h1>

   <form id="change-location" className="text-muted">
    <label className="mb-2 fs-5" for="city">
     Enter a location for weather forecast
    </label>

    <input type="text" name="city" className="form-control" autocomplete="off"  />

    <div className="text-danger fs-6 mt-2 d-none" id="errortxt">
     Enter city or country name
    </div>

    <button  type="button" onClick={ax}
     className="btn btn-outline-success form-control mt-3 d-xl-none"
     id="formBtn"
    >
     Search
    </button>
   
   </form>

   <div id="card" className="card shadow-lg d-none">
    <div className="icon-container">
     <img
      id="weather-icon"
      className="icon"
      src="./"
      alt="./"
      width="100"
      height="100"
     />
    </div>

    <div id="details" className="text-uppercase">
     <h5 className="mb-3">City Name</h5>
     <p className="mb-3">CLOUDS</p>
     <div className="display-4 mb-3">
      <span>TEMP</span>
      <span>&deg;C</span>
     </div>
    </div>
   </div>
  </div>

 
  <div id="overlay" className="overlay d-none">
   <div className="spinner-border text-light" role="status">
    <span className="sr-only"></span>
   </div>
  </div>
       
       <div className={main}> <label for="1">Email</label>
    <input className="input" type="email" placeholder="Email" id="1"required></input> 
     <label for="2">Paswword</label>
    <input className="input" type="password" placeholder="password" id="2"required></input>
    <button type="button" className="btn2"onClick={loading}>Tizimga kirish</button>
     <p className="p" onClick={nextPage}>Ro'yxadan otish </p></div>
    <div className={pg}>
    <label for="1">First name</label>
    <input className="input" type="text" placeholder="Name" id="1"required="text"></input> 
     <label for="2">Last name</label>
    <input className="input" type="text" placeholder="Last name" id="2"required="text"></input>
    <label for="1">Email</label>
    <input className="input" type="email" placeholder="Email" id="1"required="email"></input> 
     <label for="2">Paswword</label>
    <input className="input" type="password" placeholder="password" id="2"required="password"></input>
    <button type="button" className="btn2" onClick={loading}>Ro'yxatdan otish</button>
    <p className="p" onClick={oldpage}>Sizda alla qachon hisob bormi?</p>
    </div>
    <div className={load}><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
        </div>
        </div>
        <div className={block}>
  <button
   className="btn btn-warning text-white position-fixed bottom-0 mb-5 ms-5"
   id="open"
  >
   Get Help
  </button>

  
  <div className="container d-none modal-own" id="switcher">
   <button
    id="close"
    className="btn btn-close position-absolute top-0 end-0 p-4 btn-outline-dark"
   ></button>

   <h3 className="text-white">If site isn't working, you can change server</h3>

   <select className="form-select w-25 bg-light" id="apiSelect">
    <option value="API1">Server One</option>
    <option value="API2">Server Two</option>
    <option value="API3">Server Three</option>
   </select>
  </div>

  <div className="copyright position-fixed end-0 bottom-0 mb-5 me-5 w-25">
   Powered by
   <a className="link-info" target="_blank" href="./App.js" 
    >Habibulayev Azizbek </a>, all rights reserved
  </div>
  </div>
        </>
    )
}
export default App2;

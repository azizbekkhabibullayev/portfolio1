import React, { useState } from "react";
import './App.css';

function App2() {
    const [main, setMain] = useState('main2');
    const [pg, setPg] = useState('main3');
    const [load, setLoad] = useState('main3');
    const [wet, setWet] = useState('container text-muted mx-auto text-center d-none');
    const [block, setBlock] = useState('d-none');

    const[containerClass, setContainerClass] = useState('container d-none modal-own')
    const[errorTxt,setErrorTxt]= useState('')
    const [ errorTxtClass,setErrorTxtClass]= useState('')
    const[cityClass,setCityClass]=useState('form-control')
    const[formBtnClass,setFormBtnClass]=useState('btn btn-outline-success form-control mt-3 d-xl-none')
    const[weatherIconSrc,setWeatherIconSrc]=useState('card shadow-lg d-none')
    const[detailsInnerHTML,setDetailsInnerHTML]=useState('')
    const[weatherIconAlt,setWeatherIconAlt]=useState('')
    const[cardClass,setCardClass]=useState('card shadow-lg ')
  

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
            alert('Siz royxatdan odingiz')
           
        },3000)
    
   
    }

  

    const [overlay, setOverlay] = useState("overlay d-none");
    const [KEY, setKEY] = useState("96b947a45d33d7dc1c49af3203966408");

    const getData = async (city) => {
        setOverlay("overlay d-flex");

        const base = "https://api.openweathermap.org/data/2.5/weather";
        const query = `?q=${city}&units=metric&appid=${KEY}`;

        const req = await fetch(base + query);
        const data = await req.json();

        setOverlay("overlay d-none");

        return data;
    };

    const handleBtnOpenClick = () => {
        setContainerClass("container d-flex modal-own");
    };

    const handleBtnCloseClick = () => {
        setContainerClass("container d-none modal-own");
    };
    const keys = {
        API1: "96b947a45d33d7dc1c49af3203966408",
        API2: "baea381d31d2efa76e51177799c96f2d",
        API3: "649b17900f83a9cf5a5b9c3e33fb9c6d",
       };
const switcher=document.querySelector('#apiSelect')
    const handleSwitcherChange = () => {
        let api = switcher.value;
        if (switcher.value !== "API1") {
            setKEY(keys[api]);
        }
    };
    window.addEventListener("offline", (e) => {
        alert("Connection lost, please try again later!");
       });
       
const changeLocation=document.querySelector('#change-location')
    const handleFormSubmit = (e) => {
        e.preventDefault();

        if (!!changeLocation.city.value) {
            let city = changeLocation.city.value.trim();

            city = city.charAt().toUpperCase() + city.slice(1).toLowerCase();

            changeLocation.reset();

            getData(city)
                .then((data) => addUI(data))
                .catch((err) => {
                    setErrorTxt("Network error.");
                    setErrorTxtClass("text-danger fs-6 mt-2");
                    setOverlay("overlay d-none");

                    console.log(err);

                    setTimeout(() => {
                        setErrorTxtClass("d-none");
                    }, 2500);
                });
            } else {
                setCityClass("form-control");
                setErrorTxtClass("text-danger fs-6 mt-2");
                setErrorTxt("Enter city or country name");
            setFormBtnClass("d-none");

            setTimeout(() => {
                setCityClass("form-control");
                setErrorTxtClass("d-none");
                setFormBtnClass("btn btn-outline-success form-control mt-3 d-xl-none");
            }, 2000);
        }
    };

    const addUI = (val) => {
        const { name, sys, main, weather } = val;

        setDetailsInnerHTML(`
            <h5 className="mb-3">${name}, ${sys.country}</h5>

            <p className="mb-3">${weather[0].main}</p>

            <div className="display-4 mb-4 ">
                <span>${main.temp}</span>
                <span>&deg;C</span>
            </div>
        `);

        setWeatherIconSrc(`https://openweathermap.org/img/wn/${weather[0].icon}@2x.png`);
        setWeatherIconAlt(weather[0].description);

        if (cardClass.includes("d-none")) {
            setCardClass("card shadow-lg");
        }
    };

    return (
        <>
            <div className="container-fluid">
                <div className="main">
                   
                    <div className={wet}>
                        <h1 className="my-5"> Weather</h1>

                        <form id="change-location" className="text-muted" onSubmit={handleFormSubmit}>
                            <label className="mb-2 fs-5" htmlFor="city">
                                Enter a location for weather forecast
                            </label>

                            <input type="text" name="city" className={cityClass} autoComplete="off" />

                            <div className={errorTxtClass} id="errortxt">
                                {errorTxt}
                            </div>
                            <button type="submit" className={formBtnClass} id="formBtn">
                                Search
                            </button>
                        </form>

                        <div id="card" className={cardClass}>
                            <div className="icon-container">
                                <img id="weather-icon" className={weatherIconSrc}src={weatherIconSrc} alt={weatherIconAlt} width="100" height="100" />
                            </div>

                            <div id="details" className="text-uppercase" dangerouslySetInnerHTML={{ __html: detailsInnerHTML }} />
                        </div>
                    </div>

                    <div id="overlay" className={overlay}>
                        <div className="spinner-border text-light" role="status">
                            <span className="sr-only"></span>
                        </div>
                    </div>
                    <div className={main}>
                    <label htmlFor="inp1">Email</label>
                    <input className="input" type="email" id="inp1" name="username" required/>
                    <label htmlFor="inp1">Paswword</label>
                    <input className="input" type="password" id="inp2" name="password" required/> 
                    <div className={errorTxtClass} id="errortxt">
                        {errorTxt}
                    </div>           
                    <button type="button" className="btn2" onClick={loading}>
                        Tizimga kirish
                    </button>
                    <p className="p" onClick={nextPage}>
                        Ro'yxadan otish
                    </p>
                </div>

                <div className={pg}>
                    <label htmlFor="1">First name</label>
                    <input className="input" type="text" placeholder="Name" id="1" required/>
                    <label htmlFor="2">Last name</label>
                    <input className="input" type="text" placeholder="Last name" id="2" required/>
                    <label htmlFor="1">Email</label>
                    <input className="input" type="email" placeholder="Email" id="1" required/>
                    <label htmlFor="2">Paswword</label>
                    <input className="input" type="password" placeholder="password" id="2" required/>
                   
                    <p className={errorTxtClass} >{errorTxt}</p>
                    <button type="button" className="btn2" onClick={loading}>
                        Ro'yxatdan otish
                    </button>
                    <p className="p" onClick={oldpage}>
                        Sizda alla qachon hisob bormi?
                    </p>
                </div>

                <div className={load}>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
                </div>

              

            <div className={block}>
                <button className="btn btn-warning text-white position-fixed bottom-0 mb-5 ms-5" id="open" onClick={handleBtnOpenClick}>
                    Get Help
                </button>

                <div className={containerClass} id="switcher">
                    <button
                        id="close"
                        className="btn btn-close position-absolute top-0 end-0 p-4 btn-outline-dark"
                        onClick={handleBtnCloseClick}
                    ></button>

                    <h3 className="text-white">If site isn't working, you can change server</h3>

                    <select className="form-select w-25 bg-light" id="apiSelect" onChange={handleSwitcherChange}>
                        <option value="API1">Server One</option>
                        <option value="API2">Server Two</option>
                        <option value="API3">Server Three</option>
                    </select>
                </div>

                <div className="copyright position-fixed end-0 bottom-0 mb-5 me-5 w-25">
                    Powered by <a className="link-info" target="_blank" href="./App.js">Habibulayev Azizbek </a>, all rights reserved
                </div>
            </div>
        </>
    );
}

export default App2;

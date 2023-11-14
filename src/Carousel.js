import { useState } from "react";
import { data } from "./data";
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Presents from "./Presents";
import './App.css';

function Carousel(){

    const [carousel, setCarousel] = useState(0);
    const {name, description, titles, image} = data[carousel];

    const nextPage = () => {
        setCarousel(carousel => {
            carousel ++;
            if ( carousel > data.length -1){
                carousel = 0;
            }
            return carousel;
        })
    }

    const previousPage = () => {
        setCarousel(carousel => {
            carousel --;
            if ( carousel < 0){
                return data.length -1
            }
            return carousel;
        })
    }


    return(
        <Router>
        <div>
            <div className="header_container">
                <div className="header_text_container">
                    <h1 className="header">{titles}</h1>
                    <p>{name}</p>
                    <p className="title_header">{description}</p>

                    <div className="main_btn">
                        <button onClick={previousPage}> ◅ </button>
                        <button onClick={nextPage}> ▻ </button>
                    </div>
                </div>
                <img src={image} width='700px' alt="pic"/>
            </div>
            <Link to="presents" className="presents_link">Watch our presents!</Link>
        
            <Routes>
                    <Route path="/presents" element={<Presents />} />
                </Routes>
      </div>
    </Router>
    )
}

export default Carousel;
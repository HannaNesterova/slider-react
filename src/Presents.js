import { useState } from "react";
import './App.css';
import { dataPresents } from "./dataPresents";

function Presents(){

    const [present, setPresent] = useState(dataPresents);

    const removePresent = (id) => {
        const newPresent = present.filter(item =>
            item.id !== id);
            setPresent(newPresent);
        
    }

    return(
        <div>
            <h1> Make your choice!</h1>
            <p className="present_title">Here, you can chose, which present you like the most, from all of {present.length} items.</p>

            <div className="flex_presents">

                {present.map((present => {
                    const {id, presentsImg,presentsTitle, presentsDescription, price } = present;

                    return(
                        <div key={id} className="presentsContainer">
                            <h4>{id} - {presentsTitle}</h4>
                            <img src={presentsImg} alt="img" width='300px' height='450px' />
                            <p>{presentsDescription}</p>
                            <p>{price}</p>
                            <button onClick={() => removePresent(id)}>delete</button>
                        </div>
                    )
                }))}
            </div>
            <div className="btn_del_all">
                <button onClick={() => setPresent([])}>DELETE ALL ITEMS</button>
            </div>
        </div>
    );
}

export default Presents;
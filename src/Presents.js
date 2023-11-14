import { useState } from "react";
import './App.css';
import { data } from "./data";

function Presents(){

    const [present, setPresent] = useState(data);

    return(
        <div>
            <h1> Make your choice!</h1>
            <p className="present_title">Here, you can chose, which present you like the most.</p>

            <div>
                {present.map((present => {
                    const {id,presentsImg,presentsTitle,presentsDescription,price} = present;
                }))}
                <img src={present.length} />
            </div>
        </div>
    );
}

export default Presents;
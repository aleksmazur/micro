import React, { useState, useEffect } from "react";
import { getInfo, getInfoById } from "./info";

export default function HomeContent() {
    const [chars, setChars] = useState([]);

    useEffect(() => {
        getInfo().then((data) => setChars(data.results));
    }, []);

    return (
        <div className="grid grid-cols-4 gap-5">
            <h2>Wrapper App</h2>
            {chars.map((char) => (
                <div key={char.id}>
                    <div>{char.name}</div>
                    <img src={char.image} alt="image" />
                </div>
            ))}
        </div>
    )
}
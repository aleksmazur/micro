import React, { useState, useEffect } from "react";
import { getInfo } from "./info";
import { Link } from "react-router-dom";

export default function HomeContent() {
    const [chars, setChars] = useState([]);

    useEffect(() => {
        getInfo().then((data) => setChars(data.results));
    }, []);

    return (
        <div className="grid grid-cols-4 gap-5">
            {chars.map((char) => (
                <div key={char.id}>
                    <div>{char.name}</div>
                    <Link to={`char/${char.id}`}>
                      <img src={char.image} alt="image" />
                    </Link>
                </div>
            ))}
        </div>
    )
}
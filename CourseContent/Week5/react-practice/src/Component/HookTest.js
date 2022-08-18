import React, { useEffect, useState } from "react";

export const HookTest = (props) => {
    const [time, setTime] = useState(() => new Date().toLocaleTimeString());
    const printName = (name1) => {
        return `My name is ${name1}`;
    };
    useEffect(() => {});
    setInterval(() => {
        setTime(() => new Date().toLocaleTimeString());
    }, 1000);
    const list = ["mustafa", "mahmood", "kamel", "alowisi"];

    return (
        <div className="text" id="text">
            The time now is {time} {props.timeType + printName(props.name)}
            <h1>Name</h1>
            <ul>
                {list.map((elem, index) => {
                    return <li key={index}>{elem}</li>;
                })}
            </ul>
        </div>
    );
};

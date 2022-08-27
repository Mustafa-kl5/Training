import React, { useEffect, useState } from "react";

export const HookTest = (props) => {
    const [time, setTime] = useState(() => new Date().toLocaleTimeString());

    const tick = () => {
        setTime(new Date().toTimeString());
    };

    setInterval(() => {
        tick();
    }, 1000);

    return (
        <div className="text" id="text">
            {time}
        </div>
    );
};

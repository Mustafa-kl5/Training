import React, { useState } from "react";

export default function Form() {
    const [value, setValue] = useState("ddddd");

    return (
        <>
            <form>
                <label>
                    Name:
                    <input type="text" value={value} onChange={setValue()} />
                </label>
                <input type="submit" value="Submit" />
            </form>
            <div>{value}</div>
        </>
    );
}

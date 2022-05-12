import React from "react";

export default function Main ({toggle}) {
    return (
        <>
            <h1>Hello in Context example</h1>
            <button onClick={toggle} className="btn btn-success">Show allert</button>
        </>
    )
}
import React from "react";
import Card from "./Card";


function Container ({ hogs }) {
    console.log(hogs)
    return (
        <div className="ui grid container">
            <Card hogs={hogs}/>
        </div>
    )
}

export default Container
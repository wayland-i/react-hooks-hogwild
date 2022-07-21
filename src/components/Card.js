import React, { useState } from "react";
import Stats from "./Stats";


function Card({ hogs }) {
    // console.log(hogs.name)

    // const [isHidden, setIsHidden] = useState(false);
    const [showStats, setShowStats] = useState(false);

    function handleStatsClick() {
        setShowStats((prevShowStats) => !prevShowStats)
        // I want the details to show when tile is clicked
        // When show stats is false I want to hide details
        // Show details when true
    }

    function handleDetails () {
        
    }
    // console.log(showStats)

    // if (showStats === true){
    //     console.log("hello")
    // } else if(showStats === false){
    //     // 
    //     return null;
    // }

    // if (isHidden) return null;

    // const {name, specialty, image} = hogs;
    
    const getHogs = () => hogs.map((hog) => {

        
        
        return (
            <div className="ui eight wide column" key={hog.name}>
                <p>{hog.name}</p>
                <img onClick={handleStatsClick}src={hog.image} alt="pigture"></img>
                
                {showStats ? "front" : "back"}
            </div>
        )
        
    })
console.log('potato')
    return (
        <div>
            {getHogs()}
        </div>
    )

}

export default Card
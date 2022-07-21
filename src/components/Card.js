import React from "react";


function Card({ hogs }) {
    // console.log(hogs.name)
    
    const getHogs = () => hogs.map((hog) => {

        
        
        return (
            <div className="ui eight wide column" key={hog.name}>
                <p>{hog.name}</p>
                <img src={hog.image} alt="pigture"></img>
            </div>
        )
        
    })

    return (
        <div>
            {getHogs()}
        </div>
    )

}

export default Card
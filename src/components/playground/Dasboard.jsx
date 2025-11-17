import { useState } from "react";


const Dashboard = () => {

    const [appMode, setAppMode] = "lightmode";

    // do conditional rendering using if else statement
    function lightmodeToggle(){


    }

     function darkmodeToggle(){

        
    }

    if (appMode == "lightmode") {
        return (
            <div className="row ">
                <h1>Dashboard</h1>
                <button className="btn btn-dark" onClick={lightmodeToggle}>Dark Mode</button>

            </div>

        )


    }
    else {
        return (
            <div className="row ">
                <h1>Dashboard</h1>
                <button className="btn btn-light">Light Mode</button>

            </div>

        )


    }

}


export default Dashboard
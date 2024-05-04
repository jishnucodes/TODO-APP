import React from "react";
import { useState, useEffect } from "react";
import { getDateArray } from "../../Utils/DateArray";
import { getTimeArray } from "../../Utils/TimeArray";



const TaskNavbar = () => {


    const[currentTime,setCurrentTime] = useState(new Date());

    useEffect(()=>{
        const Interval = setInterval(()=>{
            setCurrentTime(new Date())
        },1000)

        return () => clearInterval(Interval);
    },[]);

    


    const date = getDateArray(currentTime);
    const time = getTimeArray(currentTime);


    return (
        <nav className="navbar navbar-expand-lg  py-2 ">
            <div className="container">
                <a className="navbar-brand" href="#">
                    <span className="home-icon">
                        <i className="fa-solid fa-house"></i>
                    </span>
                </a>
                <button className="user-button">
                    <span id="" className="mx-5 user-icon">
                        <i className="fa-solid fa-user"></i>
                    </span>
                </button>
                
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse d-flex justify-content-end" id="navbarNav">
                    <ul className="navbar-nav ">
                        <li className="nav-item active mx-5">
                            <a href="#" className="nav-link">
                                Task Manager
                            </a>
                        </li>
                        <li className="nav-item active">
                        
                        <a className="nav-link" href="#">
                            <span className="calender-icon">
                                <i className="fa-solid fa-calendar-days"></i>
                            </span>
                            {date.join(" ")}
                        </a>
                        <a href="#" className="nav-link">
                            <span className="clock-icon">
                                <i className="fa-solid fa-clock"></i>
                            </span>
                            {time.join(" : ")}
                        </a>
                    </li>
                       

                    </ul>
                </div>
                </div>
        </nav>
    )
}

export default TaskNavbar;
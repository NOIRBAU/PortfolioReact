import React from "react";
import "./download.css";

const Download = () => {
    return (
        <div className="fixed w-full h-full bg-[#1c1c1c] flex justify-center items-center load__container" id="loader">
            <div className=" flex justify-center items-center logo__container">
                <div className="load__logo"></div>
            </div>
        </div>
    )
}

window.addEventListener('load', () => {
    const loader = document.getElementById("loader");
    loader.classList.add('loader-finish');
});

export default Download;
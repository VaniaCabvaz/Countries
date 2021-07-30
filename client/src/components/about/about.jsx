import React from 'react';
import './about.css';
import { DiJavascript1 } from "react-icons/di";
import {DiCss3} from "react-icons/di";
import {DiHtml5} from "react-icons/di";

export default function Home (){
    return (
        <>
        <div>
            <h1 className="h1-about">About this Web App</h1>
            <div className="container-about">
                <div className="about">
                    <p className="p-about">This web application was created with Node js and Express for the backend, PostgreSQL and Sequalize for the database, React and Redux for the frontend and styles with CSS. </p>
                </div>
                 <p className="p-title-about"><DiJavascript1/> Javascript</p>
                <div className="container-box">
                    <div className="container-box2 c75">
                        <p>79%</p>
                    </div>
                </div>
                    <p className="p-title-about"><DiCss3/> CSS</p>
                <div className="container-box">
                    <div className="container-box2 c19">
                        <p>19.6%</p>
                    </div>
                </div>
                    <p className="p-title-about"><DiHtml5/> HTML</p>
                <div className="container-box">
                    <div className="container-box2 c3">
                        <p>3.4%</p>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
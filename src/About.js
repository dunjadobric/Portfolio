import React from "react";

export default class About extends React.Component {
    render() {
        return(
            <div className="about">
                <div className="aboutText">
                    <p>Hey... let me introduce myself</p>
                    <p>I'm Dunja Dobric</p>
                    <p>Front-end Web Developer from Serbia</p>
                    <p>...very enthusiastic person...</p>       
                    <p>by the way, beside web development</p>
                    <p>I have great affection for photography</p>
                </div>
                <div className="aboutImg"></div>
            </div>
        )
    }
}
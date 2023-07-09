import React, { Component } from 'react';
import ReactPlayer from "react-player";

// import VideoPlayer from '../videoStuff/VideoPlayer';    will implement custom player later

class Project1 extends Component {

    render() {

        return(
            <div className='container mt-20 mb-20 d-flex justify-content-center align-items-center'>
                <h1 className=''>Project 1</h1>
                <ReactPlayer
                    className='mt-20 '
                    url="https://vimeo.com/586971565"
                    controls='true'
                />
            </div>
        );
    }
}


export default Project1;
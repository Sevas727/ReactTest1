import React, {PropTypes} from 'react';

const SideBar = ({}) => {
    return (

        <div className="side-bar col-sm-3">
        <div className="navbar-header">
        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
        <span className="sr-only">Toggle navigation</span>
    <span className="icon-bar"></span>
    <span className="icon-bar"></span>
    <span className="icon-bar"></span>
    </button>
    </div>

    <div className="navbar collapse navbar-collapse" id="bs-example-navbar-collapse-1">

        <div className="img-container" >

        <img src="../../img/face-mask.png"  alt="#"/>
        </div>
        <h1>Hi, Username</h1>
        <button className="btn">My Videos</button>
        <button className="btn">About</button>
        </div>
        </div>


        );
    };

export default SideBar;


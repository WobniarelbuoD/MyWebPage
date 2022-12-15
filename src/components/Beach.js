import React from 'react';
import Image from "../images/Green.webp"

const Beach = () => {
    return (
        <div style={{backgroundImage:`url(${Image})`,width: "100vw",height: "100vh",position: "fixed",zIndex: -10, backgroundRepeat: 'no-repeat', backgroundSize:"cover", backgroundPosition: "center"}}></div>
    );
};

export default Beach;
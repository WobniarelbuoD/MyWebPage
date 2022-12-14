import React from 'react';
import Image from "../images/background.jpg"

const Beach = () => {
    return (
        <div style={{backgroundImage:`url(${Image})`,width: "100vw",height: "100vh",position: "fixed",zIndex: -10, backgroundRepeat: 'no-repeat', backgroundSize:"cover", backgroundPosition: "center", filter: 'blur(2px)'}}></div>
    );
};

export default Beach;
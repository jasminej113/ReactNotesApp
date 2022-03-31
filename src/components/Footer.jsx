import React from "react";

function Footer(){
    //getFullYear() is a method for date object in js
    const currentYear = new Date().getFullYear();
    return (
    <footer>
    <p>Copyright © {currentYear} </p>
    </footer>
    );
}

export default Footer;
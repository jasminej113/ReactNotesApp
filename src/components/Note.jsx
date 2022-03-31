
import React from "react";

//caps indicates custom components
//classeName are applied to html elements in jsx, NOT custom components in App.jsx
//change font with googleapi in index.html

//props are passed in from note.js array
function Note(props) {
    //props are defined
    //css class "note" for styling
    return (
    <div className="note">
    
         <h1>{props.title}</h1>
         <p>{props.content}</p>
    </div>
    );
}

export default Note;
import React from "react";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import Note from "./Note.jsx";
import notes from "../notes.js";
//catches exports from custom components

//create a function that dynamically creates multiple notes out of props
//noteItem single note passed in
function createNotes(noteItem) {
    return (
    <Note 
    //key needed for react to work, cannot tap into it
        key={noteItem.key}
        title={noteItem.title}
        content={noteItem.content}
    />
    );

}


//render it
//order of custom components matter 
function App(){
    //pass createNotes function within a map() function
    return (
    <div>
        <Header />
        {notes.map(createNotes)}
        <Footer />
    </div>
    );
}

export default App;
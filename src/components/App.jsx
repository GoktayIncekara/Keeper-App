import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "../notes";
import CreateArea  from "./CreateArea";
import { isNotEmittedStatement } from "typescript";

function App() {
    const [notes,setNotes] = React.useState([]);

    function addNote(note) {
        setNotes(prevNotes => {
             return [...prevNotes, note];
        })
    }

    function deleteNote(id) {
        setNotes(prevNotes => {
            return prevNotes.filter((noteItem, index) => {
                return index !== id;
            });
        });
    }

    return <div>
        <Header />
        <CreateArea 
            onAdd= {addNote}
        />
        {notes.map((noteItem,index) => {
            return <Note 
            key= {index}
            id= {index}
            title= {noteItem.title}
            content= {noteItem.content}
            onDelete={deleteNote}
            />;
        })}
        
        {//notes.map(createNote)
        }
        <Footer />
    </div>
} 

export default App;







/* function createNote(note) {
    return <Note 
        key = {note.key}
        title = {note.title}
        content = {note.content}
    />
} */
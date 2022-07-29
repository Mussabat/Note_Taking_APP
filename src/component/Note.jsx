import React from 'react'

function Note(props) {
    const noteDeleteHandler = (noteId) => {
        props.setNotes(props.notes.filter((note) => note.id !== noteId))
      }

      const editHandler = (noteId) => {
        const toBeEditedNote = props.notes.find((note) => note.id === noteId);
        props.setEditMode(true);
        props.setEditableNote(toBeEditedNote) ;
        props.setTitle(toBeEditedNote.title);
       }
    
  return (
    <div>
        <ul>
        {props.notes.map((note) => (
          <li>
            <span>{note.title}</span>
            <button onClick={() => editHandler(note.id)}>edit</button>
            <button onClick={() => noteDeleteHandler(note.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Note
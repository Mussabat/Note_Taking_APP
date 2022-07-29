import "./App.css";

import { useState } from "react";
import Note from "./component/Note";
import Form from "./component/Form";

function App() {
  const [notes, setNotes] = useState([]);
  const [title, setTitle] = useState("");
  const [editableNote, setEditableNote] = useState(null);
  const [editMode, setEditMode] = useState(false);

  return (
    <div className="App">
      <Form
        notes={notes}
        setNotes={setNotes}
        title={title}
        setTitle={setTitle}
        editableNote={editableNote}
        setEditableNote={setEditableNote}
        editMode={editMode}
        setEditMode={setEditMode}
      />
      <Note
        notes={notes}
        setNotes={setNotes}
        title={title}
        setTitle={setTitle}
        editableNote={editableNote}
        setEditableNote={setEditableNote}
        editMode={editMode}
        setEditMode={setEditMode}
      />
    </div>
  );
}

export default App;

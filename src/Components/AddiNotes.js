import React, { useContext, useState } from "react";
import noteContext from "../context/notes/notecontext";

const AddiNotes = (props) => {
  const {showAlert}=props
  const context = useContext(noteContext);
  const { addNotes } = context;
  const [note, setnote] = useState({ title: "", description: "", tag: "" });
  const HandleClick = (e) => {
    e.preventDefault();
    showAlert("Node added successfully",'success')
    addNotes(note.title, note.description, note.tag);
    setnote({ title: "", description: "", tag: "" });
  };
  const onChange = (e) => {
    setnote({ ...note, [e.target.name]: e.target.value });
  };
  return (
    <div style={{marginTop:"7rem"}}>
      <h1 style={{fontFamily: "'Lucida Console', 'Courier New', monospace"}}>Add Notes</h1>
      <form onSubmit={HandleClick}>
        <div className="form-group">
          <label htmlFor="title" style={{fontFamily: "'Lucida Console'"}}>Title</label>
          <input
            type="text"
            className="form-control"
            id="title"
            name="title"
            placeholder="Title"
            onChange={onChange}
            minLength={3}
            value={note.title}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="description" style={{fontFamily: "'Lucida Console'"}}>Description</label>
          <input
            type="text"
            className="form-control"
            id="description"
            name="description"
            placeholder="Description"
            onChange={onChange}
            minLength={5}
            value={note.description}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="tag" style={{fontFamily: "'Lucida Console'"}}>Tag</label>
          <input
            type="text"
            className="form-control"
            id="tag"
            name="tag"
            placeholder="Tag"
            value={note.tag}
            onChange={onChange}
          />
        </div>
        <button
          type="submit"
          className="btn btn-primary my-3"
        >
          Add Notes
        </button>
      </form>
    </div>
  );
};

export default AddiNotes;

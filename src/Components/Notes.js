import React, { useContext, useEffect, useRef, useState } from "react";
import noteContext from "../context/notes/notecontext";
import Noteitem from "./Noteitem";
import AddiNotes from "./AddiNotes";
import { useNavigate } from "react-router-dom";
const Notes = (props) => {
  const { showAlert } = props;
  const context = useContext(noteContext);
  const { notes, getNotes, editNotes } = context;
  let history = useNavigate();
  useEffect(() => {
    if (localStorage.getItem("token")) {
      getNotes();
      showAlert("logged in successfully", "success");
    } else {
      history("/login");
    }
    // eslint-disable-next-line
  }, []);
  const ref = useRef(null);
  const refClose = useRef(null);
  const [note, setNote] = useState({
    id: "",
    etitle: "",
    edescription: "",
    etag: "",
  });
  const updateNote = (currentNote) => {
    ref.current.click();
    setNote({
      id: currentNote._id,
      etitle: currentNote.title,
      edescription: currentNote.description,
      etag: currentNote.tag,
    });
  };
  const handleClick = (e) => {
    editNotes(note.id, note.etitle, note.edescription, note.etag);
    showAlert("updated successfully", "success");
    refClose.current.click();
  };

  const onChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };
  return (
    <>
      <div className="container ">
        <AddiNotes showAlert={showAlert} />
      </div>
      <button
        ref={ref}
        type="button"
        className="btn btn-primary d-none"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Launch demo modal
      </button>
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content" style={{backgroundColor:"#d3d3d3"}}>
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Update your Notes
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form className="my-3">
                <div className="mb-3">
                  <label htmlFor="title" className="form-label">
                    Title
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="etitle"
                    name="etitle"
                    value={note.etitle}
                    aria-describedby="emailHelp"
                    onChange={onChange}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="description" className="form-label">
                    Description
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="edescription"
                    name="edescription"
                    value={note.edescription}
                    onChange={onChange}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="tag" className="form-label">
                    Tag
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="etag"
                    name="etag"
                    value={note.etag}
                    onChange={onChange}
                  />
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button
                ref={refClose}
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Discard Changes
              </button>
              <button
                disabled={
                  note.etitle.length < 3 || note.edescription.length < 5
                }
                type="button"
                className="btn btn-primary"
                onClick={handleClick}
              >
                Update Notes
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="container my-3">
        <h2
          style={{ fontFamily: "'Lucida Console', 'Courier New', monospace" }}
        >
          Your Notes
        </h2>
        <div className="container mx-2">
          {notes.length === 0 && "No notes to display..."}
        </div>
        <div className="row" style={{ backgroundColor: "aliceblue",borderRadius:"20px" }}>
          {notes.map((note) => {
            return (
              <Noteitem
                key={note._id}
                updateNote={updateNote}
                note={note}
                showAlert={showAlert}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Notes;

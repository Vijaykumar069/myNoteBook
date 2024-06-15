import React, { useState } from "react";
import NoteContext from "./notecontext";

export const NoteState = (props) => {
  const host = "http://localhost:5000";
  const notesInitial = [];
  const [notes, setNotes] = useState(notesInitial);

  // get all notes....
  const getNotes = async () => {
    // to do api calls.
    try {
      const response = await fetch(`${host}/api/notes/fetchallnotes`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "auth-token": localStorage.getItem("token"),
        },
      });
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const json = await response.json();
      setNotes(json);
    } catch (error) {
      console.log(error);
    }
  };
  const addNotes = async (title, description, tag) => {
    // to do api calls.
    const response = await fetch(`${host}/api/notes/addnote`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token"),
      },
      body: JSON.stringify({ title, description, tag }),
    });
    const note = await response.json();
    setNotes(notes.concat(note));
  };
  // delete notes...
  const deleteNotes = async (_id) => {
    const response = await fetch(`${host}/api/notes/deletenotes/${_id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token"),
      },
    });
    const json = await response.json();
    const newNote = notes.filter((note) => {
      return note._id !== _id;
    });

    setNotes(newNote);
  };
  const editNotes = async (id, title, description, tag) => {
    // API Call
    const response = await fetch(`${host}/api/notes/updatenotes/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token"),
      },
      body: JSON.stringify({ title, description, tag }),
    });
    const json = await response.json();

    let newNotes = JSON.parse(JSON.stringify(notes));
    // Logic to edit in client
    for (let index = 0; index < notes.length; index++) {
      const element = notes[index];
      for (let index = 0; index < newNotes.length; index++) {
        const element = newNotes[index];

        if (element._id === id) {
          element.title = title;
          element.description = description;
          element.tag = tag;
          newNotes[index].title = title;
          newNotes[index].description = description;
          newNotes[index].tag = tag;
          break;
        }
      }
    }
    setNotes(newNotes);
  };

  return (
    <NoteContext.Provider
      value={{ notes, getNotes, addNotes, deleteNotes, editNotes }}
    >
      {props.children}
    </NoteContext.Provider>
  );
};

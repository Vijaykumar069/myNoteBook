import React, { useContext } from "react";
import noteContext from "../context/notes/notecontext";

const Noteitem = (props) => {
  const context = useContext(noteContext);
  const { deleteNotes } = context;
  const { note, updateNote, showAlert } = props;
  const onClick = () => {
    deleteNotes(note._id);
    showAlert("Deleted Successfully", "success");
  };
  const containerStyles = {
    backgroundColor: "#fcffb39e",
    transition: "box-shadow 0.3s",
  };

  const containerHoverStyles = {
    boxShadow: "5px 5px 10px rgba(0, 0, 0, 0.3)",
  };

  const [isHovered, setIsHovered] = React.useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div className="col-md-3">
      <div
        className="card  my-3"
        style={{ ...containerStyles, ...(isHovered && containerHoverStyles) }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="card-body">
          <h5 className="card-title">{note.title}</h5>
          <p className="card-subtitle mb-2 text-muted">{note.tag}</p>
          <p className="card-text">{note.description}</p>
          <i className="fa-regular fa-trash-can mx-2" onClick={onClick}></i>
          <i
            className="far fa-edit mx-2"
            onClick={() => {
              updateNote(note);
            }}
          ></i>
        </div>
      </div>
    </div>
  );
};

export default Noteitem;

import React, { useContext } from 'react'
import noteContext from "../context/notes/notecontext"
import Notes from './Notes';

export const Homi = (props) => {
  const {showAlert}=props;
  return (
    <div>
      <Notes showAlert={showAlert}/>
    </div>
  )
}

// import React, { useContext } from 'react'
// import noteContext from "../context/notes/notecontext"
import React from 'react'
import Notes from './Notes';

export const Homi = (props) => {
  const {showAlert}=props;
  return (
    <div>
      <Notes showAlert={showAlert}/>
    </div>
  )
}

// import React from 'react';
// import Notes from './Notes';

// export const Homi = (props) => {
//   const { showAlert } = props;
//   return (
//     <div>
//       <Notes showAlert={showAlert} />
//     </div>
//   );
// };

// import React from 'react';
// import Notes from './Notes';

// const Homi = (props) => {
//   const { showAlert } = props;
//   return (
//     <div>
//       <Notes showAlert={showAlert} />
//     </div>
//   );
// };

// export default Homi;

import React from 'react';
import AceEditor from "react-ace";
import { CodeBlock, dracula } from "react-code-blocks";
import Code from './CodeBlock.jsx';
import Draw from './Draw.jsx';
import Stack from '@mui/material/Stack';
// import Avatar from '@mui/material/Avatar';
import { Avatar } from '@mui/material';
import Box from '@mui/material/Box';








export default function Canvas() {
  document.body.style.backgroundColor = "#3f4142"

  return (
    <div>
    {/* In future, implement an avatar with first two characters of first/last name */}
    {/* <Avatar id="avatar" sx={{ bgcolor: "#37a3f0" }}>PH</Avatar> */}
      <h2 id='canvas-header'>
        HackerCanvas
      </h2>
      <div id="canvas">
        <Stack direction="row">
          <Code  />
          <Draw />
        </Stack>
      </div>
    </div>
  )
}


// function onChange(newValue) {
//   console.log("change", newValue);
// }

// <div id='canvas'>
//       <div>
//         <h2 id='canvasHeader'>
//           Hacker Canvas
//         </h2>
//       </div>
//       <div>
//         <AceEd
//         />
//       </div>
//     </div>
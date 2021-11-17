import React from 'react';
import AceEditor from "react-ace";
import { CodeBlock, dracula } from "react-code-blocks";
import Code from './CodeBlock.jsx';
import Draw from './Draw.jsx';
import Stack from '@mui/material/Stack';






export default function Canvas() {
  return (
    <div>
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
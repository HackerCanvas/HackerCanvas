import React from 'react';
import AceEditor from "react-ace";
import { CodeBlock, dracula } from "react-code-blocks";
import Code from './CodeBlock.jsx';


import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/theme-solarized_dark";


export default function Canvas() {
  return (
    <Code  />
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
//         <CodeBlock
//           text={"hello world"}
//           language={javascript}
//           showLineNumbers={showLineNumbers}
//           theme={dracula}
//         />
//       </div>
//     </div>
import React from 'react';
import AceEditor from "react-ace";

import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/theme-solarized_dark";

export default function Canvas() {
  function onChange(newValue) {
    console.log("change", newValue);
  }
  return(
    <div id='canvas'>
      <div>
        <h2 id='canvasHeader'>
          Hacker Canvas
        </h2>
      </div>
      <div>
        <AceEditor
          placeholder="Placeholder Text"
          mode="javascript"
          theme="solarized_dark"
          name="blah2"
          onChange={onChange}
          fontSize={14}
          showPrintMargin={true}
          showGutter={true}
          highlightActiveLine={true}
          value={` `}
          setOptions={{
          enableBasicAutocompletion: false,
          enableLiveAutocompletion: false,
          enableSnippets: false,
          showLineNumbers: true,
          tabSize: 2,
          }}
        />
      </div>
    </div>
  )
}
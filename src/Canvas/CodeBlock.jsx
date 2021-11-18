import React from 'react';
import AceEditor from "react-ace";

import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/theme-solarized_dark"; 

export default function Code() {
  function onChange(newValue) {
    console.log("change", newValue);
  }
  return (
    <div id="outer-block">
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
        value={`Welcome to Hacker Canvas`}
        setOptions={{
        enableBasicAutocompletion: false,
        enableLiveAutocompletion: false,
        enableSnippets: false,
        showLineNumbers: true,
        tabSize: 2,
        }}
      />
           
    </div>
  )
}
import React from 'react';
import { CodeBlock, CopyBlock, dracula } from "react-code-blocks";
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/theme-github";

function onChange(newValue) {
  console.log("change", newValue);
}

export default function Code() {
  function onChange(newValue) {
    console.log("change", newValue);
  }
  return (
<div id='block'>
      <div>
        <AceEditor
          mode="javascript"
          theme="github"
          onChange={onChange}
          name="UNIQUE_ID_OF_DIV"
          editorProps={{ $blockScrolling: true }}
        />
      </div>
    </div>
  )
}
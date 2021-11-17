import React from 'react';
import { CodeBlock, CopyBlock, dracula } from "react-code-blocks";



export default function Code() {
  return (
    <div id="outer-block">
    <CopyBlock
      id="code-block"
      text={`console.log('Hello World')`}
      language={'javascript'}
      showLineNumbers={true}
      startingLineNumber={1}
      theme={dracula}
      wrapLines={true}
      width={50}
    />
    </div>
  )
}
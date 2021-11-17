import React from 'react';
import AceEditor from "react-ace";
import { CodeBlock, dracula } from "react-code-blocks";
import Code from './CodeBlock.jsx';
import { useState, useEffect } from "react";
import Excalidraw from "@excalidraw/excalidraw";
import Box from '@mui/material/Box';



export default function Draw() {
  return (
    <div className="excalidraw-wrapper">
    {/* <Box sx={{
        width: 800,
        height: 500,
        backgroundColor: 'primary.dark',
      }} */}
      {/* id="draw-box"> */}
      <Excalidraw id="drawtwo" />
    {/* </Box> */}
    </div>
  )
}
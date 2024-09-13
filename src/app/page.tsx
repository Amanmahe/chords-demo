"use client";
import { invoke } from "@tauri-apps/api/tauri";
import { listen } from '@tauri-apps/api/event';
import Connection from "../components/Connection";
import Navbar from "../components/Navbar";
import React, { useState,useEffect } from "react";
import Canvas from "../components/Canvas";
import Steps from "../components/Steps";

export type BitSelection = "ten" | "twelve" | "fourteen" | "auto";

const   Page = () => {
  const [data, setData] = useState(""); // Data from the serial port
  const [selectedBits, setSelectedBits] = useState<BitSelection>("auto"); // Selected bits
  const [isConnected, setIsConnected] = useState<boolean>(false); // Connection status
  const [isGridView, setIsGridView] = useState<boolean>(true); // Grid view state
  const [isDisplay, setIsDisplay] = useState<boolean>(true); // Display state

  // // same as payload
  // type Payload = {
  //   connected: string;
  // };



  return (
    <>
    
    <Navbar />
    
    {/* {isConnected ? ( */}
        <Canvas
          data={data}
          selectedBits={selectedBits}
          isGridView={isGridView}
          isDisplay={isDisplay}
        />
      {/* ) : (
        <Steps />
      )} */}
      <Connection
        LineData={setData}
        Connection={setIsConnected}
        selectedBits={selectedBits}
        setSelectedBits={setSelectedBits}
        isGridView={isGridView}
        setIsGridView={setIsGridView}
        isDisplay={isDisplay}
        setIsDisplay={setIsDisplay}
      />
      
    </>
  );
};

export default Page;
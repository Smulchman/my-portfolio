// This page is meant to simply display a pdf of my resume
// React
import React from "react";
// Core viewer
import { Viewer } from "@react-pdf-viewer/core";

// Web worker
import { Worker } from "@react-pdf-viewer/core";

// Plugins
// import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';

// Import styles
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";

// Create new plugin instance
// const PluginInstance = defaultLayoutPlugin();

function Hello() {
  return (
    <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
      <div className="pdf">
        <Viewer fileUrl="../assets/mulcahy_resume.pdf" />
      </div>
    </Worker>
  );
}

export default Hello;

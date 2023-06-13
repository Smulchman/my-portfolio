// This page is meant to simply display a pdf of my resume
// React
import React from 'react';
// Core viewer
import { Viewer } from '@react-pdf-viewer/core';

// Web worker
import { Worker } from '@react-pdf-viewer/core';

// Plugins
// import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';

// Import styles
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';

// Create new plugin instance
const PluginInstance = defaultLayoutPlugin();

function Hello() {
  
  return (
    <div className="pdf">
      <h2>placeholder</h2>
    </div>
  );
}

export default Hello;

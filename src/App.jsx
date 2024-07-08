// src/App.js
import React from 'react';
import './App.css';
import Organizers from './components/organizer';
import Speakers from './components/speakers';
import Introduction from './components/introduction';
import Schedule from './components/schedule';
import LogoSection from './components/logosection';
function App() {
  return (
    <div className="grid sm:grid-cols-2">
  <div className="h-screen flex items-center justify-center ">
    <div className="sm:fixed top-1/2 transform -translate-y-1/2 p-4">
      <LogoSection />
    </div>
  </div>
  <div className="h-screen ml-3 pr-5 pt-5">
    <Introduction />
    <Speakers />
    <Schedule />
    <Organizers />
  </div>
</div>

  );
}

export default App;

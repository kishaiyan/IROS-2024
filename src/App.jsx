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
    <div>
  <div className="items-center justify-center">
    <div>
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

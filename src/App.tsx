import React from 'react';

import Header from './components/sections/Header';
import AboutMe from './components/sections/AboutMe';
import WorkExperience from './components/sections/WorkExperience';
import OtherExperience from './components/sections/OtherExperience';

function App() {
  return (
    <div className="wrapper">
      <Header />
      <main className="main" aria-label="Content">
        <AboutMe />
        <WorkExperience />
        <OtherExperience />
      </main>
    </div>
  );
}

export default App;

import React from 'react';

import Header from './components/sections/Header';
import AboutMe from './components/sections/AboutMe';
import Experience from './components/sections/Experience';

function App() {
  return (
    <div className="wrapper">
      <Header />
      <main className="main" aria-label="Content">
        <AboutMe />
        <Experience />
      </main>
    </div>
  );
}

export default App;

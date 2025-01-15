import React from 'react';
import StepTitle from './components/common/StepTitle';
import AboutMe from './components/sections/AboutMe';
import Header from './components/sections/Header';

function App() {
  return (
    <div className='wrapper'>
      <Header />
      <main className="content__wrap" aria-label="Content">
        <AboutMe />
      </main>
    </div>
  );
}

export default App;

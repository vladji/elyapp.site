import React from 'react';
import { Header } from './components/Header';
import { Intro } from './components/Intro';
import { About } from './components/About';

import './styles/styles.scss';

function App() {
  return (
    <>
      <Header />
      <main>
        <Intro />
        <About />
      </main>
    </>
  );
}

export default App;

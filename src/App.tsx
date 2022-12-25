import React from 'react';
import { Header } from './components/Header';
import { Intro } from './components/Intro';
import { About } from './components/About';
import { PriceBlock } from './components/PriceBlock';
import { Slider } from './components/Slider';

import './styles/styles.scss';

function App() {
  return (
    <>
      <Header />
      <main>
        <Intro />
        <About />
        <PriceBlock />
        <Slider />
      </main>
    </>
  );
}

export default App;

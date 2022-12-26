import React from 'react';
import { Header } from './components/Header';
import { Intro } from './components/Intro';
import { About } from './components/About';
import { PriceBlock } from './components/PriceBlock';
import { ContactButtons } from './components/ContactButtons';
import { ResultSlides } from './components/ResultSlides';
import { TestimonialsSlides } from './components/TestimonialsSlides';

import './styles/styles.scss';

function App() {
  return (
    <>
      <Header />
      <main>
        <Intro />
        <About />
        <PriceBlock />
        <ResultSlides />
        <ContactButtons />
        <TestimonialsSlides />
      </main>
    </>
  );
}

export default App;

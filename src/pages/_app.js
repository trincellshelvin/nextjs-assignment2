import "@/styles/globals.css";
import React from 'react';
import Counter from './counter/index';
import './index.css';


function App({ Component, pageProps }) {
  return (
    <div className="App">
      <Component {...pageProps} />
      <Counter />
    </div>
  );
}

export default App;


//In src/App.js, import the Counter component and include it in the App component's JSX.

import Counter from './Counter';
import './App.css';
import React from 'react';


function App() {  
  return (
    <div className = 'App'>
      <h1>My App</h1>
      < Counter />
    </div>
  );
};

export default App;

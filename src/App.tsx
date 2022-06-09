import React from 'react';

import './App.css';
import { HomePage } from './pages';
import { TodoStore } from './store';
function App() {
  return (
    
      <HomePage todostore={TodoStore}/>
    
  );
}

export default App;

import React from 'react';
import { Header } from './components/app/Header';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <Header title="hey" paragraph="stuff"/>
    </div>
  );
}

export default App;

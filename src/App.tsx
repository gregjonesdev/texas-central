import React from 'react';
import { Header } from './components/app/Header';
import { TicketForm } from './components/app/TicketForm';
import './App.css';

const App: React.FC = () => {
  return (
    <div id="body" className="App">
      <Header />
      <TicketForm />
    </div>
  );
}

export default App;

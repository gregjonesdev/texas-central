import React from 'react';
import { Header } from './components/app/Header';
import { TicketForm } from './components/app/TicketForm';
import { About } from './components/app/About';
import { Tracking } from './components/app/Tracking';
import './App.css';

const App: React.FC = () => {
  return (
    <div id="body" className="App">
      <Header />
      <div className="tab-content" id="pills-tabContent">
        <TicketForm />
        <About />
        <Tracking />
      </div>

    </div>
  );
}

export default App;

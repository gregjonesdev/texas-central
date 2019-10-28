import React from "react";

type CardProps = {
  title: string,
  paragraph: string
}

export const TicketForm = () =>
  <div id="ticketbox" className="card">
    <div className="card-header font-style">
      <h3>Select Your Journey</h3>
    </div>
    <div className="card-body">
      Fill out a form!
    </div>
  </div>

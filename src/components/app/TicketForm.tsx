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
      <div className="ticketform">
        <div className="dropdown ticketselect">
          <button
            className="btn btn-outline-secondary dropdown-toggle"
            data-toggle="dropdown">
            Round Trip
            <span className="caret"></span>
          </button>
          <div className="dropdown-menu">
            <button className="btn btn-default btn-block">
              One Way
            </button>
          </div>
        </div>
        <div className="dropdown ticketselect">
          <button
            className="btn btn-outline-secondary dropdown-toggle"
            data-toggle="dropdown">
            Round Trip
            <span className="caret"></span>
          </button>
          <div className="dropdown-menu">
            <button className="btn btn-default btn-block">
              One Way
            </button>
          </div>
        </div>  <div className="dropdown ticketselect">
            <button
              className="btn btn-outline-secondary dropdown-toggle"
              data-toggle="dropdown">
              Round Trip
              <span className="caret"></span>
            </button>
            <div className="dropdown-menu">
              <button className="btn btn-default btn-block">
                One Way
              </button>
            </div>
          </div>
      </div>
    </div>
  </div>

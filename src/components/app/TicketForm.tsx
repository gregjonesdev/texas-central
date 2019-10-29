import React, { useState } from "react";

type CardProps = {
  title: string,
  paragraph: string
}

type IOption = {
  type: string
}

export const TicketForm = () => {

  const classOptions = [
    {
      name: 'Standard',
    },
    {
      name: 'Business',
    },
  ];

  const DropdownMenu = () => {

    const choices = classOptions;

    return (
      <div>
        <button
          className="btn btn-outline-secondary dropdown-toggle"
          data-toggle="dropdown">
          {choices[0].name}
          <span className="caret"></span>
        </button>
        <div className="dropdown-menu">
        { choices.map((choice, index) => {
            return index > 0 ?
              (
                <button key="index" className="btn btn-default btn-block">
                  {choice.name}
                </button>
              ) : null
            }
          )
        }
        </div>
      </div>
    )
  }

  return (
    <div id="pills-ticketbox" className="tab-pane fade show active card" role="tabpanel" aria-labelledby="pills-ticketbox-tab">
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
              1 Adult
              <span className="caret"></span>
            </button>
            <div className="dropdown-menu">
              <button className="btn btn-default btn-block">
                Bring Some Friends
              </button>
            </div>
          </div>
          <div className="dropdown ticketselect">
            <DropdownMenu />





          </div>
        </div>
      </div>
    </div>
  )
}

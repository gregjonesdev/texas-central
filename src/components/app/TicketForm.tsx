import React, { useState } from "react";

type CardProps = {
  title: string,
  paragraph: string
}

type IOption = {
  type: string
}

export const TicketForm = () => {

  const classes = [
    {
      name: 'Standard',
    },
    {
      name: 'Business',
    },
  ];

  const DropdownMenu = () => {

    const choices = classes;

    const [currentChoice, setChoice ] = useState(choices[0].name);

    return (
      <div>
        <button
          className="btn btn-outline-secondary dropdown-toggle"
          data-toggle="dropdown">
          {currentChoice}
          <span className="caret"></span>
        </button>
        <div className="dropdown-menu">
        { choices.map((choice, index) => {
            return choice.name === currentChoice ?
               null :
               (
                 <button
                  key="index"
                  className="btn btn-default btn-block"
                  onClick={e => { setChoice(choice.name)}}>
                  {choice.name}
                 </button>
               )
            }
          )
        }
        </div>
      </div>
    )
  }

  return (
    <div
      id="pills-ticketbox" 
      className="tab-pane fade show active card" 
      role="tabpanel" 
      aria-labelledby="pills-ticketbox-tab">
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

import React, { useState } from "react";

type CardProps = {
  name: string,
}

type DropdownMenuProps = {
  choices: IChoice[]
}

interface IChoice {
  name: string
}



const classes = [
  {
    name: 'Standard',
  },
  {
    name: 'Business',
  },
];

const tickets = [
  {
    name: 'Round Trip',
  },
  {
    name: 'One Way',
  },
]

const DropdownMenu = (props: DropdownMenuProps) => {

  const { choices } = props;

  const [currentChoice, setChoice] = useState(choices[0].name);

  return (
    <div className="dropdown ticketselect">
      <button
        className="btn btn-outline-secondary dropdown-toggle"
        data-toggle="dropdown">
        {currentChoice}
        <span className="caret"></span>
      </button>
      <div className="dropdown-menu">
      { choices.map((choice: any, index: number) => {
          return choice.name !== currentChoice ?
            (
              <button
               key="index"
               className="btn btn-default btn-block"
               onClick={e => { setChoice(choice.name)}}>
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

export const TicketForm = () => {

  const [travelers, updateTravelers] = useState(1)


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
          <DropdownMenu choices={tickets}/>
          <div className="dropdown ticketselect">
            <button
              className="btn btn-outline-secondary dropdown-toggle"
              data-toggle="dropdown">
              {travelers} { travelers !== 1 ? "Adults" : "Adult"}
              <span className="caret"></span>
            </button>
            <div className="dropdown-menu">
              <form className="px-3 py-3">
                <div className="form-group">
                  Adults
                  <div className="float-right">
                    <span className="badge badge-secondary">
                      <span className="oi oi-minus"></span>
                    </span>
                    <span className="form-increment-value">
                      {travelers}
                    </span>
                    <span className="badge badge-secondary">
                      <span className="oi oi-plus"></span>
                    </span>
                  </div>
                </div>
              </form>
            </div>
        </div>
          <DropdownMenu choices={classes}/>
        </div>
      </div>
    </div>
  )
}

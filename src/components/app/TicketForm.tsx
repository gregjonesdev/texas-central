import React, { useState } from "react";

type CardProps = {
  name: string,
}

type DropdownMenuProps = {
  choices: any
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

function AnotherComponent(props: CardProps) {
  return <h1>{props.name}</h1>;
}

const DropdownMenu = (props: DropdownMenuProps) => {

  const { choices } = props;

  const [currentChoice, setChoice ] = useState(choices[0].name);

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
              1 Adult
              <span className="caret"></span>
            </button>
            <div className="dropdown-menu">
              <button className="btn btn-default btn-block">
                Bring Some Friends
              </button>
            </div>
          </div>
          <DropdownMenu choices={classes}/>
        </div>
      </div>
    </div>
  )
}

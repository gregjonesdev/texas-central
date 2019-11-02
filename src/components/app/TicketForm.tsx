import React, { useState } from 'react';

type CardProps = {
  name: string,
}

type DropdownMenuProps = {
  choices: IChoice[]
}

type DropdownPassengerProps = {
  adults: number,
  increment: any,
}

type EntryProps = {
  type: string
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

const DropdownPassengers = (props: DropdownPassengerProps) => {
  const passengers = [
    {type: "Adult", initial: 1},
    {type: "Child", initial: 0},
    {type: "Senior", initial: 0},
    {type: "Student", initial: 0},
  ]

  // const Entry = (props: EntryProps) => {
  //
  //   const [number, update] = useState(0)

  //
  //   }

  const {adults, increment } = props;

  const handleClick = (e: any) => {
    const value = e.currentTarget.value;
    alert(value)
  }

  return (
    <div className="dropdown ticketselect">
      <button
        className="btn btn-outline-secondary dropdown-toggle"
        data-toggle="dropdown">
        {null} { null !== 1 ? "Adults" : "Adult"}
        <span className="caret"></span>
      </button>
      <div className="dropdown-menu">
        <form className="px-3 py-3">
        <div className="form-group">
          Adults
          <div className="float-right">
            <button className="badge badge-secondary" onClick={e => handleClick(e)} value="-1">
              <span className="oi oi-minus"></span>
            </button>
            <span className="form-increment-value">
              {adults}
            </span>
            <button className="badge badge-secondary" onClick={e => handleClick(e)} value="1">
              <span className="oi oi-plus"></span>
            </button>
          </div>
        </div>
        </form>
      </div>
    </div>
  )
}

export const TicketForm = () => {

  const [adults, increment] = useState(1);


  return (
    <div
      id="pills-ticketbox"
      className="tab-pane fade show active card pills-content"
      role="tabpanel"
      aria-labelledby="pills-ticketbox-tab">
      <div className="card-header font-style">
        <h3>Select Your Journey</h3>
      </div>
      <div className="card-body">
        <div className="ticketform">
          <DropdownMenu choices={tickets}/>
          <DropdownPassengers adults={adults} increment={increment}/>
          <DropdownMenu choices={classes}/>
        </div>
      </div>
    </div>
  )
}

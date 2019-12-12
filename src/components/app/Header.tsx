import React from 'react';

type CardProps = {
  title: string,
  paragraph: string
}

export const Header = () =>
  <nav
    id="navigation"
    className="navbar navbar-expand-lg navbar-dark bg-dark d-flex justify-content-start">
    <a href="/" className="">
      <img
        src="/coming-soon-logo.png"
        alt="texas-central-logo"
        className="App-logo"
      />
    </a>
    <ul className="nav nav-pills" id="pills-tab" role="tablist">
      <li className="nav-item">
        <a
          className="nav-link font-style active"
          id="pills-ticketbox-tab"
          data-toggle="pill"
          href="#pills-ticketbox"
          role="tab"
          aria-controls="pills-ticketbox"
          aria-selected="true">
          Tickets
        </a>
      </li>
      <li className="nav-item">
        <a
          className="nav-link font-style"
          id="pills-about-tab"
          data-toggle="pill"
          href="#pills-about"
          role="tab"
          aria-controls="pills-about"
          aria-selected="false">
          About
        </a>
      </li>
      <li className="nav-item">
        <a
          className="nav-link font-style"
          id="pills-tracking-tab"
          data-toggle="pill"
          href="#pills-tracking"
          role="tab"
          aria-controls="pills-tracking"
          aria-selected="false">
          Tracking
        </a>
      </li>
      <li className="nav-item">
        <a
          className="nav-link font-style"
          id="pills-api-tab"
          data-toggle="pill"
          href="#pills-api"
          role="tab"
          aria-controls="pills-api"
          aria-selected="false">
          Api
        </a>
      </li>
    </ul>
  </nav>

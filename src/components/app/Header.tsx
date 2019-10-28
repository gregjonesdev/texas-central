import React from "react";

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
        <a className="nav-link" id="pills-profile-tab" data-toggle="pill" href="#pills-profile" role="tab" aria-controls="pills-profile" aria-selected="false">Profile</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" id="pills-contact-tab" data-toggle="pill" href="#pills-contact" role="tab" aria-controls="pills-contact" aria-selected="false">Contact</a>
      </li>
    </ul>
    <div className="tab-content" id="pills-tabContent">
      <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">...</div>
      <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">...</div>
      <div className="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">...</div>
    </div>
  </nav>

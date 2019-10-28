import React from "react";

type CardProps = {
  title: string,
  paragraph: string
}

export const Header = () =>
  <nav className="navbar navbar-expand-lg navbar-light bg-dark">
    <a href="#">
      <img src="/coming-soon-logo.png" alt="texas-central-logo" height="50px"/>
    </a>
  </nav>

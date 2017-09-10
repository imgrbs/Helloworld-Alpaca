import React, { Component } from 'react'
import styled from 'styled-components'

class Navbar extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-toggleable-sm navbar-light bg-faded" data-offset-top="500">
        <a className="navbar-brand" href="#">
          <img className="logo-sm" src="../../static/img/logo-01.png" alt="logo" />
        </a>
        <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#menu" aria-controls="menu" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="menu">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="#what">What</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Team</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Where</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">When</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Contact</a>
            </li>
          </ul>
        </div>
      </nav>
    )
  }
}

export default Navbar
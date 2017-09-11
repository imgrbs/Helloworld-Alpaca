import React, { Component } from 'react'
import styled from 'styled-components'

class Navbar extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      collapseNav: false
    }
    this.toggleNav = this.toggleNav.bind(this)
  }

  toggleNav() {
    this.setState({ collapseNav: !this.state.collapseNav })
  }

  render() {
    return (
      <div className="row">
        <nav className="col-12 text-center navbar sticky-top navbar-expand-lg navbar-toggleable-md navbar-light" style={{  height: '55px', transition: 'all .2 linear' }} id="nav">
          <a className="navbar-brand" href="#">
            <img className="logo-sm" src="../../static/img/logo-01.png" alt="logo" />
          </a>
          <button 
            onClick={ () => this.toggleNav() }
            className="navbar-toggler navbar-toggler-right" 
            type="button"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
            <div className={`collapse navbar-collapse ${this.state.collapseNav ? 'show':''}`} id="menu"
              
            >
              <ul className="nav nav-pills navbar-nav ml-auto mr-auto col-sm-6">
                <li className="nav-item">
                  <a className="nav-link" href="#what">What</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#team">Team</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#where">Where</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#when">When</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#contact">Contact</a>
                </li>
              </ul>
            </div>
        </nav>
      </div>
    )
  }
}

export default Navbar
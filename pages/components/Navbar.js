import React, { Component } from 'react'
import styled from 'styled-components'
import Scroll, { Link, animateScroll } from 'react-scroll'

class Navbar extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      collapseNav: false
    }
    this.toggleNav = this.toggleNav.bind(this)
    // this.closeNav = this.closeNav.bind(this)
  }

  toggleNav() {
    this.setState({ collapseNav: !this.state.collapseNav })
  }

  closeNav() {
    this.setState({ collapseNav: false })
    console.log('test')
  }

  render() {
    return (
      <div className="row">
        <nav className="col-12 text-center navbar sticky-top navbar-expand-lg navbar-toggleable-md navbar-light" style={{  minHeight: '55px', transition: 'all .2 linear' }} id="nav">
          <a onClick={() => animateScroll.scrollToTop()} className="navbar-brand">
            <img className="logo-sm" src="../../static/img/logo-01.png" alt="logo" />
          </a>
          <button 
            onClick={ () => this.toggleNav() }
            className="navbar-toggler navbar-toggler-right" 
            type="button"
            style={{ zIndex: 10 }}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
            <div className={`collapse navbar-collapse ${this.state.collapseNav ? 'show':''}`} id="menu">
              <ul className="nav nav-pills navbar-nav ml-auto mr-auto col-sm-6 col-md-12">
                <li className="nav-item">
                  <Link onClick={() => this.closeNav()} activeClass="active" to="what" spy={true} smooth={true} offset={-60} duration={400} onSetActive={this.handleSetActive} className="nav-link">What</Link>
                </li>
                <li className="nav-item">
                  <Link onClick={() => this.closeNav()} activeClass="active" to="team" spy={true} smooth={true} offset={-90} duration={400} onSetActive={this.handleSetActive} className="nav-link">Team</Link>
                </li>
                <li className="nav-item">
                  <Link onClick={() => this.closeNav()} activeClass="active" to="where" spy={true} smooth={true} offset={-120} duration={400} onSetActive={this.handleSetActive} className="nav-link">Where</Link>
                </li>
                <li className="nav-item">
                  <Link onClick={() => this.closeNav()} activeClass="active" to="when" spy={true} smooth={true} offset={-150} duration={400} onSetActive={this.handleSetActive} className="nav-link">When</Link>
                </li>
                <li className="nav-item">
                  <Link onClick={() => this.closeNav()} activeClass="active" to="game" spy={true} smooth={true} offset={-210} duration={400} onSetActive={this.handleSetActive} className="nav-link">Game</Link>
                </li>
                <li className="nav-item">
                  <Link onClick={() => this.closeNav()} activeClass="active" to="contact" spy={true} smooth={true} offset={-210} duration={400} onSetActive={this.handleSetActive} className="nav-link">Contact</Link>
                </li>
              </ul>
            </div>
        </nav>
      </div>
    )
  }
}

export default Navbar
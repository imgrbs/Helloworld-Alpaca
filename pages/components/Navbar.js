import React, { Component } from 'react'
import styled from 'styled-components'

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
          <a className="navbar-brand" href="#">
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
            <div className={`collapse navbar-collapse ${this.state.collapseNav ? 'show':''}`} id="menu"
              
            >
              <ul className="nav nav-pills navbar-nav ml-auto mr-auto col-sm-6 col-md-12">
                <li className="nav-item"
                
                >
                  <a className="nav-link" href="#what"
                    onClick={() => this.closeNav()}
                  >What</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#team"
                    onClick={() => this.closeNav()}                    
                  >Team</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#where"
                    onClick={() => this.closeNav()}
                  >Where</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#when"
                    onClick={() => this.closeNav()}
                  >When</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#contact"
                    onClick={() => this.closeNav()}                    
                  >Contact</a>
                </li>
              </ul>
            </div>
        </nav>
      </div>
    )
  }
}

export default Navbar
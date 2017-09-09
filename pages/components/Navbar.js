import React, { Component } from 'react'
import styled from 'styled-components'

class Navbar extends React.Component {
  render() {
    return (
      <nav className={ true ? 'fixed-top' : '' }>
        <div className="container-fluid">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar-collapse" aria-expanded="false">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <a className="navbar-brand" href="#">HelloWorld</a>
          </div>
          <div className="navbar-collapse" id="navbar-collapse">
            <ul className="nav navbar-nav">
              <li className=""><a href="#">wwww</a></li>
              <li className=""><a href="#">wwww</a></li>
              <li className=""><a href="#">wwww</a></li>
              <li className=""><a href="#">wwww</a></li>
              <li className=""><a href="#">wwww</a></li>
            </ul>
          </div>
        </div>
      </nav>
    )
  }
}

export default Navbar
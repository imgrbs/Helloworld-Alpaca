import React, { Component } from 'react'
import styled from 'styled-components'

class Navbar extends React.Component {
  render() {
    return (
      <div id="nav" className="col-12">
        {/* <nav className="navbar navbar-toggleable-md">
          <a className="navbar-brand">
            HelloWorld #Alpaca
          </a>
          
          <div class="collapse navbar-collapse" id="navbarText">
            <ul class="navbar-nav mr-auto">
              <li class="nav-item active">
                <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Features</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Pricing</a>
              </li>
            </ul>
            <span class="navbar-text">
              Navbar text with an inline element
            </span>
          </div>
        </nav> */}
        <nav className="navbar navbar-inverse">
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
            <div className="collapse navbar-collapse" id="navbar-collapse">
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
      </div>
    )
  }
}

export default Navbar
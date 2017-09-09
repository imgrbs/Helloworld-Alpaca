import React from 'react'
import styled from 'styled-components'

class LandingPage extends React.Component {
  render() {
    return (
      <div className="row landing-height">
        <h1 className="header-text col-12 text-center">
          HelloWorld
        </h1>
        <div className="col-12 text-center">
          <h2>Alpaca</h2>
          <h3>
            Break Your Limit <br />
            And Practice Your Skill <br />
          </h3>
        </div>
      </div>
    )
  }
}

export default LandingPage
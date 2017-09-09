import React from 'react'
import styled from 'styled-components'

const Box = styled.div`
  width: 100%;
  height: 300px;
  margin: 1em 0;
  border: solid 5px #000;
`

class TeamPage extends React.Component {
  render() {
    return (
      <div className="row team-height">
        <div className="col-12 text-center">
          <h1>Team</h1>
        </div>
        <div className="col-12 text-center">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <Box />
              </div>
              <div className="col-lg-6">
                <Box />
              </div>
              <div className="col-lg-6">
                <Box />
              </div>
              <div className="col-lg-6">
                <Box />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default TeamPage
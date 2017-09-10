import React from 'react'
import styled from 'styled-components'

const Box = styled.div`
  margin: 1em 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 185px;
`

class TeamPage extends React.Component {
  render() {
    return (
      <div id="team" className="row team-height">
        <div className="col-12 text-center">
          <img className="what-text" src="../../static/img/team.png" alt="team" />
        </div>
        <div className="col-12 text-center">
          <div className="container">
            <div className="row">
              <div className="col-md-3">
                <Box>
                  <img className="team-logo-top" src="../../static/img/font.png" alt="" />
                  Front-End
                </Box>
              </div>
              <div className="col-md-3">
                <Box>
                  <img className="team-logo-top" src="../../static/img/de.png" alt="" />
                  Design
                </Box>
              </div>
              <div className="col-md-3">
                <Box>
                  <img className="team-logo-top" src="../../static/img/game.png" alt="" />
                  Game
                </Box>
              </div>
              <div className="col-md-3">
                <Box>
                  <img className="team-logo-top" src="../../static/img/infra.png" alt="" />
                  Infrastructure
                </Box>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default TeamPage
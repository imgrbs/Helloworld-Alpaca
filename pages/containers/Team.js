import React from 'react'
import styled from 'styled-components'

import Modal from '../components/Modal'

const Box = styled.div`
  margin: 1em 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 185px;
  
  span {
    font-size: 35px;
    color: ${props => props.color ? props.color : '#fff' };
  }
`

class TeamPage extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      oneOn : 'false',
      twoOn : 'false',
      threeOn : 'false',
      fourOn : 'false'
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    this.setState({ oneOn: 'true' })
  }

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
                <Box onClick={() => { console.log('wow'); this.handleClick() }} color="#A56CFF">
                  <img className="team-logo-top" src="../../static/img/font.png" alt="" />
                  <span>Front-End</span>
                </Box>
                <Modal title={'Hello-FrontEnd'} desc={'wowwowwww'} handle={() => { this.setState({ oneOn : 'false'}) }} on={this.state.oneOn} />
              </div>
              <div className="col-md-3">
                <Box color="#D4FF36">
                  <img className="team-logo-top" src="../../static/img/de.png" alt="" />
                  <span>Design</span>
                </Box>
              </div>
              <div className="col-md-3">
                <Box color="#FF6666">
                  <img className="team-logo-top" src="../../static/img/game.png" alt="" />
                  <span>Game</span>
                </Box>
              </div>
              <div className="col-md-3">
                <Box color="#41E0A7">
                  <img className="team-logo-top" src="../../static/img/infra.png" alt="" />
                  <span>Infrastructure</span>
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
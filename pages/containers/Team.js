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
  
  img {
    z-index: 3;
  }

  span {
    font-size: 35px;
    color: ${props => props.color ? props.color : '#fff' };
  }
`
const Cloud = styled.img`
  height: 150px;
`

const CloudLeft = Cloud.extend`
  top: 7em;
  left: 0;
`

const AlpacaLeft = Cloud.extend`
  top: 2.5em;
  left: 5em;
`

const CloudRight = Cloud.extend`
  top: 19em;
  right: 0;
`

const AlpacaRight = Cloud.extend`
  top: 14.5em;
  right: 3em;
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
      <div name="team" id="team" className="row team-height">
        <CloudLeft src="../../static/img/cleft.png" alt="cloud" className="cloud" />
        <AlpacaLeft src="../../static/img/joox1.png" alt="cloud" className="joox joox-left" />
        <CloudRight src="../../static/img/cright.png" alt="cloud" className="cloud" />
        <AlpacaRight src="../../static/img/joox2.png" alt="cloud" className="joox joox-right" />
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
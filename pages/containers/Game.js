import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'

const PlayButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  text-decoration: none;
  transition: 0.5s;
  transform: translateY(0px);
  margin-top: 2em;

  img {
    width: 300px;
  }
  
  &:hover {
    transform: translateY(-5px); 
  }
`

const CustomDiv = styled.div`
  @media only screen and
  (min-width: 0px) {
    justify-content: start;
  }
  @media only screen and
  (min-width: 800px) {
    margin-top: 3em;
  }
  @media only screen and
  (min-width: 1366px) {
    justify-content: center;
  }
`

class GamePage extends React.Component {

  render() {
    return (
      <div name="game" id="game" className="row game-height">
        <div className="col-lg-5"></div>
        <CustomDiv className="col-12 col-lg-7 text-center d-flex flex-column align-items-center">
          <h1 className="animated infinite pulse" style={{ color: '#fff', fontSize: '2.3em' }}>Let's Play Cannon Jump!!</h1>
          <PlayButton href="https://game.helloworld.itbangmod.in.th/">
            <img src="../../static/img/play2.png" alt="" />
          </PlayButton>
        </CustomDiv>
      </div>
    )
  }
}

export default GamePage
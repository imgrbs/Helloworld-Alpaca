import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'

const LetPlay = styled.h1`
  text-shadow: 2px 2px #000;
`

const Dump = styled.div`
  @media (min-width: 0px) {
    min-height:2em;
  }
`

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
    margin-top: 1em;
  }
  @media only screen and
  (min-width: 800px) {
    margin-top: 3em;
    justify-content: center;
  }
`

class GamePage extends React.Component {

  render() {
    return (
      <div name="game" id="game" className="row game-height">
        <Dump className="col-lg-5"></Dump>
        <CustomDiv className="col-12 col-lg-7 text-center d-flex flex-column align-items-center">
          <LetPlay className="animated infinite pulse" style={{ color: '#fff', fontSize: '2.3em' }}>Let's Play Cannon Jump!!</LetPlay>
          <a href="https://game.helloworld.itbangmod.in.th/">
            <PlayButton>
              <img src="../../static/img/play2.png" alt="" />
            </PlayButton>
          </a>
        </CustomDiv>
      </div>
    )
  }
}

export default GamePage
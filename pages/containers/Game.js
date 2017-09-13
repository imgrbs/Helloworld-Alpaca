import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'

const PlayButton = styled.a`
  background-color: transparent;
  border: none;
  cursor: pointer;
  text-decoration: none;
  img {
    width: 300px;
  }
`

class GamePage extends React.Component {

  render() {
    return (
      <div name="game" id="game" className="row game-height">
        <div className="col-12 text-center">
          <Link href={{ pathname: '/game' }} >
            <PlayButton href="https://game.helloworld.itbangmod.in.th/">
              <img src="../../static/img/play2.png" alt="" />
            </PlayButton>
          </Link>
        </div>
      </div>
    )
  }
}

export default GamePage
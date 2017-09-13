import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'

const PlayButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;

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
            <PlayButton>
              <img src="../../static/img/play2.png" alt="" />
            </PlayButton>
          </Link>
        </div>
      </div>
    )
  }
}

export default GamePage
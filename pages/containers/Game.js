import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'

const PlayButton = styled.a`
  background-color: orange;
  padding: 10px 15px;
  cursor: pointer;

`

const SectionGame = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

class GamePage extends React.Component {
  // constructor(props){
  //   super(props)
  // }

  render() {
    return (
      <div name="game" id="game" className="row game-height">
        <SectionGame className="col-12 text-center">
          Game
          <Link href={{ pathname: '/game' }} 

          >
            <PlayButton >
              Click To Play!
            </PlayButton>
            {/* <a>here</a> */}
          </Link>
        </SectionGame>
      </div>
    )
  }
}

export default GamePage
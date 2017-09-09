import React from 'react'
import styled from 'styled-components'

const PlayButton = styled.button`
  background-color: orange;
`

class GamePage extends React.Component {
  render() {
    return (
      <div className="row game-height">
        <div className="col-12 text-center" style={{display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column'}}>
          Game
          <PlayButton>
            Click To Play!
          </PlayButton>
        </div>
      </div>
    )
  }
}

export default GamePage
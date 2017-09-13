import React from 'react'
import styled from 'styled-components'

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
      <div className="row game-height">
        <div className="col-12 text-center" style={{display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column'}}>
          <span>Let's Play Canon Jump!</span>
          <PlayButton>
            <img src="../../static/img/play2.png" alt="" />
          </PlayButton>
        </div>
      </div>
    )
  }
}

export default GamePage
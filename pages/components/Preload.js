import React from 'react'
import styled from 'styled-components'

const PreloadDiv = styled.div`
  display: ${props => props.display ? 'flex' : 'none'}
`

class Preload extends React.Component {
  componentDidMount() {
    setTimeout(() => {
      document.getElementById('preload').style.display = 'none'
    }, 2100);
  }

  render() {
    return (
      <PreloadDiv id="preload" className="container-fluid preload">
        <img className="" src="../../static/img/alpaca.gif" alt="preload" />
        <div className="border-spin">
        </div>
      </PreloadDiv>
    )
  }
}

export default Preload
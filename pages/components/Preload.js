import React from 'react'
import styled from 'styled-components'

const PreloadDiv = styled.div`
  display: flex;
  position: absolute;
  top: 0;
  overflow: hidden;
`

class Preload extends React.Component {
  async componentDidMount() {
    setTimeout(() => {
      document.getElementById('preload').className += ' animated fadeOut'
    }, 2100);
    setTimeout(() => {
      document.getElementById('preload').style.display = 'none'
    }, 2630);
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
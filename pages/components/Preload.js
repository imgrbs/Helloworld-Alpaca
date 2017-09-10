import React from 'react'
import styled from 'styled-components'

const PreloadDiv = styled.div`
  display: ${props => props.display ? 'flex' : 'none'}
`

class Preload extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      on : true
    }
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        on : false
      })
    }, 2100);
  }

  render() {
    return (
      <PreloadDiv display={this.state.on} className="container-fluid preload">
        <img src="../../static/img/alpaca.gif" alt="" />
      </PreloadDiv>
    )
  }
}

export default Preload
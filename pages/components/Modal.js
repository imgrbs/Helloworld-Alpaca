import React from 'react'
import styled from 'styled-components'

const Div = styled.div`
  display: ${props => props.on === 'true' ? 'block' : 'none'};
`

class Modal extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      on : 'false'
    }
  }

  render() {
    return (
      <Div on={this.props.on}>
        <div class="modal">
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title">Modal title</h5>
                <button type="button" class="close" onClick={ () => {this.props.handle()} }>
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <p>Modal body text goes here.</p>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-primary">Save changes</button>
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
              </div>
            </div>
          </div>
        </div>
      </Div>
    )
  }
}

export default Modal
import {Component} from 'react'

import './index.css'

class ToggleElement extends Component {
  state = {
    text: '',
    isChange: false,
  }

  userInput = event => this.setState({text: event.target.value})

  changeButton = () =>
    this.setState(prevState => ({isChange: !prevState.isChange}))

  render() {
    const {text, isChange} = this.state
    return (
      <>
        <div className="bg-container">
          <div className="input-text-container">
            <h1 className="heading">Editable Text Input</h1>
            <div className="input-container">
              {isChange ? (
                <input
                  type="text"
                  className="input"
                  value={text}
                  onChange={this.userInput}
                />
              ) : (
                <p className="description">{text}</p>
              )}
              {isChange ? (
                <button
                  type="button"
                  className="button"
                  onClick={this.changeButton}
                >
                  Edit
                </button>
              ) : (
                <button
                  type="button"
                  className="button"
                  onClick={this.changeButton}
                >
                  Save
                </button>
              )}
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default ToggleElement

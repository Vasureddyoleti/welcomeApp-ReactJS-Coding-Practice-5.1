// Write your code here
import {Component} from 'react'

import './index.css'

class Welcome extends Component {
  state = {isClicked: false}

  isSubscribe = () => {
    this.setState(prevState => ({isClicked: !prevState.isClicked}))
  }

  getButtonText = () => {
    const {isClicked} = this.state
    return isClicked ? 'Subscribed' : 'Subscribe'
  }

  render() {
    const buttonText = this.getButtonText()
    return (
      <div className="container">
        <h1 className="heading">Welcome</h1>
        <p className="description">Thank you! Happy learning</p>
        <button type="button" className="button" onClick={this.isSubscribe}>
          {buttonText}
        </button>
      </div>
    )
  }
}

export default Welcome

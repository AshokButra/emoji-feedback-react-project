import {Component} from 'react'

import './index.css'

class Feedback extends Component {
  state = {emojiCard: 'card1', loveCard: 'card3'}

  onChangeCard = () => {
    const {emojiCard, loveCard} = this.state
    if (emojiCard === 'card1') {
      this.setState({
        emojiCard: 'card2',
        loveCard: 'card4',
      })
    } else {
      this.setState({
        emojiCard: 'card1',
        loveCard: 'card3',
      })
    }
  }

  render() {
    const {emojiCard, loveCard} = this.state
    const {resources} = this.props
    const {emojis, loveEmojiUrl} = resources
    return (
      <div className="container">
        <div className={emojiCard}>
          <h1 className="heading">
            How satisfied are you with our customer <br />
            support performance?
          </h1>
          <div className="emoji-container">
            <div className="emoji-name-container">
              <img
                id="emojiImage"
                src={emojis[0].imageUrl}
                className="emoji-image"
              />
              <br />
              <label htmlFor="emojiImage" className="name">
                {emojis[0].name}
              </label>
            </div>
            <div className="emoji-name-container">
              <img
                id="emojiImage"
                src={emojis[1].imageUrl}
                className="emoji-image"
              />
              <br />
              <label htmlFor="emojiImage" className="name">
                {emojis[1].name}
              </label>
            </div>
            <div className="emoji-name-container">
              <img
                id="emojiImage"
                src={emojis[2].imageUrl}
                className="emoji-image"
                onClick={this.onChangeCard}
              />
              <br />
              <label htmlFor="emojiImage" className="name">
                {emojis[2].name}
              </label>
            </div>
          </div>
        </div>
        <div className={loveCard}>
          <img src={loveEmojiUrl} className="love-emoji" />
          <h1 className="thank-you-heading">Thank you!</h1>
          <p className="description">
            We will use your feedback to improve our customer support
            performance
          </p>
        </div>
      </div>
    )
  }
}

export default Feedback

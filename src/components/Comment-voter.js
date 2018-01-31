import React from 'react';
import * as CommentRef from '../firebase/refs/commentsRef';


class CommentVoter extends React.Component {
  state = {
    votes: this.props.comment.comment.votes,
    disabled: false,
    buttonIsBlue: false,
  };

  render() {
    return (
      <section>
        <p className={`button ${this.state.buttonIsBlue ? 'is-info' : 'is-danger'}`} disabled={this.state.disabled} id="voteUpButton" onClick={() => this.incrementVote(this.props.comment.comment.id)}>
          <span><i className="fas fa-thumbs-up"></i></span>
          <span className='section' id="voteCount">{this.state.votes}</span>
        </p>
      </section>
    )
  }

  incrementVote = (id) => {
    if (!this.state.disabled) {
    CommentRef.voteComment(id)
        this.setState({
          votes: this.state.votes + 1,
          buttonIsBlue: true,
          disabled: true
        })
      }
       };

 

  onUpVote = () => {
    return (
    // this.incrementVote(this.props.comment.comment.id),
    this.disableButton(),
    this.turnButtonBlue()

    )
  }

}

export default CommentVoter;
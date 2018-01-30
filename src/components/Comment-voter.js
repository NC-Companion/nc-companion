import React from 'react';
import * as CommentRef from '../firebase/refs/commentsRef';


class CommentVoter extends React.Component {
  state = {
    votes: this.props.comment.comment.votes
  };

  render() {
    return (
      <section>
        <p className="button is-danger" id="voteUpButton" onClick={() => this.incrementVote(this.props.comment.comment.id)}>
          <span><i className="fas fa-thumbs-up"></i></span>
          <span className='section' id="voteCount">{this.state.votes}</span>
        </p>
      </section>
    )
  }

  incrementVote = (id) => {
    CommentRef.voteComment(id)
      .then(res => {
        this.setState({
          votes: res.votes
        })
      }).then(() => {
        document.getElementById('voteUpButton').disabled = true
      })
      .catch(console.error)
  }

}

export default CommentVoter;
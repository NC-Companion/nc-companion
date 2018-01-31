import React from 'react';
import * as CommentRef from '../firebase/refs/commentsRef';
import PT from "prop-types";



class CommentVoter extends React.Component {
  state = {
    comment: {},
    voteInc: false
  };

  componentDidMount() {
    this.setState({
      comment: this.props.comment,
      voteInc: false
    })
  }

  componentWillReceiveProps(newProps) {
    console.log(newProps);
    if (newProps.comment) {
      this.setState({
        comment: newProps.comment,
        voteInc: false
      })
    }
  }

  render() {
    let displayVotes;
    if (this.state.comment.comment) displayVotes = this.state.voteInc ? this.state.comment.comment.votes + 1 : this.state.comment.comment.votes;
    return (
      <section>
        <p className={`button ${this.state.voteInc ? 'is-info' : 'is-danger'}`} id="voteUpButton" onClick={() => this.incrementVote(this.state.comment.comment.id)}>
          <span><i className="fas fa-thumbs-up"></i></span>
          <span className='section' id="voteCount">{displayVotes}</span>
        </p>
      </section>
    )
  }

  incrementVote = (id) => {
    if (!this.state.voteInc) {
      CommentRef.voteComment(id, 1)
      this.setState({
        voteInc: true
      })
    }
    else {
      CommentRef.voteComment(id, -1)
      this.setState({
        voteInc: false
      });
    }
  };
}

CommentVoter.propTypes = {
  comment: PT.object,
};

export default CommentVoter;
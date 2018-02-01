import React from 'react';
import * as CommentRef from '../../firebase/refs/commentsRef';
import PT from "prop-types";

class CommentVoter extends React.Component {
  state = {
    voteInc: false,
  }; 
  render() {
    const {id, votes} = this.props.comment.comment;
    return (
      <section>
        <p className={`button ${this.state.voteInc ? 'is-info' : 'is-danger'}`} id="voteUpButton" onClick={() => {
          this.incrementVote(id)}}>
          <span><i className={`fas ${this.state.voteInc ? 'fa-thumbs-down' : 'fa-thumbs-up'}`}></i></span>
          <span className='section' id="voteCount">{votes}</span>
        </p>
      </section>
    )
  }
  incrementVote = (id) => { 
    this.state.voteInc 
    ? this.setState({voteInc: false})
    : this.setState({voteInc: true});     
    CommentRef.voteComment(id,this.props.authUser);
  };
}

CommentVoter.propTypes = {
  comment: PT.object.isRequired,
  authUser: PT.object.isRequired
};

export default CommentVoter;
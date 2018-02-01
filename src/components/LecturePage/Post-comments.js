import React from 'react';
import * as CommentRef from '../../firebase/refs/commentsRef';
import PT from "prop-types";


class PostComments extends React.Component {
  state = {
    comment: '',
  };

  render() {
    return (
      <section className="post-comments">
        <form className='field is-grouped' onSubmit={(e) => this.state.comment && this.postComment(e)}>
          <section className='control is-expanded'>
          <textarea id="commentInputField" className='input' maxLength="300" onKeyPress={this.handleKeyPress} onChange={this.changeHandler} value={this.state.comment} placeholder='write a comment...' />
          </section>
          <button className='control button is-pulled-right is-danger' type='submit'>Post comment</button>
        </form>
      </section>
    )
  }

  changeHandler = (event) => {
    if (event) event.preventDefault();
    let { comment } = this.state;
    if (comment.length <= 300) {
      this.setState({
        comment: event.target.value,
      });
    }
  }

  handleKeyPress = (target) => {
    if (target.charCode === 13 && !target.shiftKey) {
      target.preventDefault()
      this.state.comment && this.postComment()
    }
  }

  postComment = (e) => {
    if (e) e.preventDefault();
    const comment = {
      body: this.state.comment,
      eventId: this.props.eventId,
      userId: this.props.userId,
      creationDate: new Date(Date.now()).toISOString(),
      votes: 0,
      likedBy : {start: 'start'}
    }
    CommentRef.postNewComment(comment, res => { res==='Success' ? this.setState({comment: ''}) : null });
    
  }
}

PostComments.propTypes = {
  fetchComments: PT.func,
  eventId: PT.string,
  userID: PT.string
};

export default PostComments;
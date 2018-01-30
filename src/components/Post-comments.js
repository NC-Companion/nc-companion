import React from 'react';
import * as CommentRef from '../firebase/refs/commentsRef';

class PostComments extends React.Component {
  state = {
    comment: '',
  };

  render() {
    return (
      <section className="post-comments">
        <form className='field is-grouped' onSubmit={() => this.state.comment && this.postComment()}>
          <section className='control is-expanded'>
          <textarea id="comment-body" className='input' rows='1' onChange={this.changeHandler} value={this.state.comment} placeholder='write a comment...' />
          </section>
          <button className='control button is-pulled-right is-danger' type='submit'>Post comment</button>
        </form>
      </section>
    )
  }

  changeHandler = (event) => {
    let { comment } = this.state;
    if (comment.length <= 250) {
      this.setState({
        comment: event.target.value,
      });
    }
  }

  // handleKeyPress = (target) => {
  //   if (target.charCode === 13) {
  //     this.state.comment && this.postComment()
  //   }
  // }

  postComment = (e) => {
    this.setState({comment: ''})
    if (e) e.preventDefault();
    const comment = {
      body: this.state.comment,
      eventId: this.props.eventId,
      userId: this.props.userId,
      creationDate: new Date(Date.now()).toISOString(),
      votes: 0
    }
    CommentRef.postNewComment(comment, res => { res==='Success' ? this.props.fetchComments() : null });
  }
}

export default PostComments;
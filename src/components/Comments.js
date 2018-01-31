import React from 'react';
import Moment from 'moment';
import CommentVoter from './Comment-voter';
import Deletecomment from './Delete-comment';
import DeleteComment from './Delete-comment';
import PT from "prop-types";



class Comments extends React.Component {
    
    render() {
        return (
            <article className="media">
                <figure className="media-left">
                    <p className="image is-64x64">
                        <img src={this.props.comment.user.avatarUrl}/>
                    </p>
                </figure>
                <section class="media-content" style={{overflow: 'hidden'}}>
                    <section class="content">
                        <p>
                            <strong>{this.props.comment.user.name}</strong>
                            <small>{this.props.comment.user.handle}</small>
                            <small>   {Moment(this.props.comment.comment.creationDate).fromNow()}</small>
                            <section className='is-size-6'>{this.props.comment.comment.body}</section>
                        </p>
                    <CommentVoter comment={this.props.comment} />
                    </section>
                </section>
                {this.props.comment.user.id === this.props.authUser.uid ? <DeleteComment deleteUserComment={this.props.deleteUserComment} index={this.props.index} /> : null}
            </article>
        )
    }
}

Comments.propTypes = {
    deleteUserComment: PT.func,
    key: PT.number,
    index: PT.number,
    ownComment: PT.bool,
    comment: PT.object,
    authUser: PT.object
  };


export default Comments;
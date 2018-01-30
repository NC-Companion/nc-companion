import React from 'react';
import Moment from 'moment';
import CommentVoter from './Comment-voter';


class Comments extends React.Component {
    
    render() {
        return (
            
            <article class="media">
            {/* {console.log(this.props.comment)} */}
                <figure class="media-left">
                    <p class="image is-64x64">
                        <img src={this.props.comment.user.imageUrl}/>
                    </p>
                </figure>
                <section class="media-content" style={{overflow: 'hidden'}}>
                    <section class="content">
                        <p>
                            <strong>{this.props.comment.user.name}</strong>
                            <small>@{this.props.comment.user.handle}</small>
                            {/* {console.log(this.props.comment.createdAt)} */}
                            <small>   {Moment(this.props.comment.comment.createdAt).fromNow()}</small>
                            <section className='is-size-6'>{this.props.comment.comment.body}</section>
                        </p>
                    <CommentVoter comment={this.props.comment} />
                    </section>
                </section>
                <section class="media-right">
                    <button class="delete" onClick={()=> this.props.deleteUserComment(this.props.index)}></button>
                </section>
            </article>
        )
    }
}


export default Comments;
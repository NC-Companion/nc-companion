import React from 'react';
import Moment from 'moment';


class Comments extends React.Component {
    
    render() {
        return (
            <article className="media">
                <figure className="media-left">
                    <p className="image is-64x64">
                        <img src={this.props.comment.user.imageUrl}/>
                    </p>
                </figure>
                <div className="media-content" style={{overflow: 'hidden'}}>
                    <div className="content">
                        <p>
                            <strong>{this.props.comment.user.name}</strong>
                            <small>{this.props.comment.user.handle}</small>
                            <small>   {Moment(this.props.comment.comment.createdAt).fromNow()}</small>
                            <section className='is-size-6'>{this.props.comment.comment.body}</section>
                        </p>
                    <p className="button is-danger">
                            <span><i className="fas fa-thumbs-up"></i></span>
                            <span className='section'>{this.props.comment.comment.votes}</span>
                    </p>
                    </div>
                </div>
                <div className="media-right">
                    {this.props.ownComment && <button className="delete" onClick={()=> this.props.deleteUserComment(this.props.index)}></button>}
                </div>
            </article>
        )
    }
}


export default Comments;
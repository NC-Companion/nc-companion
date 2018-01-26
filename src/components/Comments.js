import React from 'react';

class Comments extends React.Component {
    render() {
        return (
            <article class="media">
                <figure class="media-left">
                    <p class="image is-64x64">
                        <img src={this.props.comment.user.imageUrl}/>
                    </p>
                </figure>
                <div class="media-content" style={{overflow: 'hidden'}}>
                    <div class="content">
                        <p>
                            <strong>{this.props.comment.user.name}</strong>
                            <small>@{this.props.comment.user.handle}</small>
                            <section className='is-size-6'>{this.props.comment.comment.body}</section>
                        </p>
                    <p className="button is-danger">
                            <span><i class="fas fa-thumbs-up"></i></span>
                            <span className='section'>{this.props.comment.comment.votes}</span>
                    </p>
                    </div>
                </div>
                <div class="media-right">
                    <button class="delete"></button>
                </div>
            </article>
        )
    }
}

export default Comments;
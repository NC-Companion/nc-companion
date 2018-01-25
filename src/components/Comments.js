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
                <div class="media-content">
                    <div class="content">
                        <p>
                            <strong>{this.props.comment.user.name}</strong>
                            <small>@{this.props.comment.user.handle}</small>
                            <br/> {this.props.comment.comment.body}
                        </p>
                    </div>
                    <nav class="level is-mobile">
                        <div class="level-left button is-danger">
                            <section class="level-item">
                                <section class="icon is-small">
                                    <i class="fas fa-thumbs-up"></i>
                                </section>
                            </section>
                            <section class="level-item is-pulled-right">
                                <section class="icon is-small has-text-white">
                                    {this.props.comment.comment.votes}
                                </section>
                            </section>
                        </div>
                    </nav>
                </div>
                <div class="media-right">
                    <button class="delete"></button>
                </div>
            </article>
        )
    }
}

export default Comments;
import React from 'react';

class Resources extends React.Component{
    render () {
        return (
            <section className='media'>
                <figure class="media-left">
                    <p class="image is-64x64">
                        <img src={''}/>
                    </p>
                </figure>
                <div class="media-content">
                    <div class="content">
                        <p>
                            <strong>Hello</strong>
                            <small>@Thanks</small>
                            <br/> Bye
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
                                    9
                                </section>
                            </section>
                        </div>
                    </nav>
                </div>
            </section>
        )
    }
}

export default Resources;
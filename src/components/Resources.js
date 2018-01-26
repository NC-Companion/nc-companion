import React from 'react';

class Resources extends React.Component{
    render () {
        return (
            <section className='media'>
                <div class="media-content">
                    <div class="content">
                        <p>
                            <span href={this.props.resource.link} target='_blank' className=''>{this.props.resource.title}</span>
                            <a href={this.props.resource.link} target='_blank' className='is-pulled-right is-size-6'><i className="fas fa-link"></i></a>
                        </p>
                        <span className='is-size-7'>
                            {this.props.resource.body}
                        </span>
                    </div>
                </div>
            </section>
        )
    }
}

export default Resources;
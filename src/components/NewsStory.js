import React from 'react';


class NewsStory extends React.Component {
    render() {
        return (
            <section className='newsStory' onClick={() => { this.props.stateStory(this.props.story), document.getElementById('overlay').style.display = 'block' }} style={{ background: `linear-gradient(rgba(0,0,0,.4), rgba(0,0,0,.4)), url(${this.props.story.picture})`, backgroundSize: 'cover' }}>
                <section className="" style={{height:'80%'}}>
                </section>
                <section className="" style={{height:'20%', background:'linear-gradient(rgba(0,0,0,.6), rgba(0,0,0,.6))'}}>
                    <span className='storyHeader has-text-white is-size-4' style={{marginLeft:'1vw'}}>{this.props.story.title}</span>
                </section>
            </section>
        )
    }
}

export default NewsStory;
import React from 'react';

class CreateNews extends React.Component {

    state = {
        title: '',
        author: '',
        topics: [],
        images: [],
        links: [],
        body: '',
    }

    render() {
        return (
            <section className='createNewsComponent section'>
                <section className='title'>Create message</section>
                {/* Title */}
                <section className="field">
                    <label className="label">Title</label>
                    <section
                        className="control has-icons-left"
                        onBlur={() => this.setState({
                        title: document
                            .getElementById('titleInput')
                            .value
                    })}>
                        <input
                            id="titleInput"
                            className="input"
                            type="text"
                            placeholder="This is the title of your message."/>
                        <span className="icon is-small is-left">
                            <i className="fas fa-font"></i>
                        </span>
                    </section>
                </section>
                {/* Author */}
                <section className="field">
                    <label className="label">Author</label>
                    <section
                        className="control has-icons-left has-icons-right"
                        onBlur={() => this.setState({
                        author: document
                            .getElementById('authorInput')
                            .value
                    })}>
                        <input
                            id='authorInput'
                            className="input"
                            type="text"
                            placeholder="Add your name to the message."/>
                        <span className="icon is-small is-left">
                            <i className="fas fa-user"></i>
                        </span>
                    </section>
                </section>
                {/* Images */}
                <section className="field">
                    <label className="label">Images</label>
                    <section className="field has-addons">
                        <p className="control is-expanded has-icons-left">
                            <input
                                id='newImage'
                                className="input"
                                type="text"
                                placeholder='Attach relevant image urls to your message.'/>
                            <span className="icon is-small is-left">
                                <i className="fas fa-image"></i>
                            </span>
                        </p>
                        <p className="control">
                            <a
                                className="button is-primary"
                                onClick={() => {
                                this.addItem(document.getElementById('newImage').value, 'i');
                                document
                                    .getElementById('newImage')
                                    .value = ''
                            }}>
                                Add Image
                            </a>
                        </p>
                    </section>
                    <section className='panel'>
                        {this
                            .state
                            .images
                            .map((image, i) => <section key={i}>
                                <span className='panel-block notification is-primary has-text-black'>
                                    <span className="panel-icon" onClick={() => this.removeItem(i, 'i')}>
                                        <i className="fas fa-times"></i>
                                    </span>
                                    {image}
                                </span>
                            </section>)}
                    </section>
                </section>
                {/* Links */}
                <section className="field">
                    <label className="label">Links</label>
                    <section className="field has-addons">
                        <p className="control is-expanded has-icons-left">
                            <input
                                id='newLink'
                                className="input"
                                type="text"
                                placeholder='Attach relevant link urls to your message.'/>
                            <span className="icon is-small is-left">
                                <i className="fas fa-link"></i>
                            </span>
                        </p>
                        <p className="control">
                            <a
                                className="button is-success"
                                onClick={() => {
                                this.addItem(document.getElementById('newLink').value, 'l');
                                document
                                    .getElementById('newLink')
                                    .value = ''
                            }}>
                                Add link
                            </a>
                        </p>
                    </section>
                    <section className='panel'>
                        {this
                            .state
                            .links
                            .map((link, i) => <section key={i}>
                                <span className='panel-block notification is-success has-text-black'>
                                    <span className="panel-icon" onClick={() => this.removeItem(i, 'l')}>
                                        <i className="fas fa-times"></i>
                                    </span>
                                    {link}
                                </span>
                            </section>)}
                    </section>
                </section>
                {/* Topics */}
                <section className="field">
                    <label className="label">Topics</label>
                    <section className="field has-addons">
                        <p className="control is-expanded has-icons-left">
                            <input
                                id='newTopic'
                                className="input"
                                type="text"
                                placeholder='Attach relevant topic urls to your message.'/>
                            <span className="icon is-small is-left">
                                <i className="fas fa-hashtag"></i>
                            </span>
                        </p>
                        <p className="control">
                            <a
                                className="button is-warning"
                                onClick={() => {this.addItem(document.getElementById('newTopic').value, 't'); document.getElementById('newTopic').value = ''}}>
                                Add topic
                            </a>
                        </p>
                    </section>
                    <section className='panel'>
                        {this
                            .state
                            .topics
                            .map((topic, i) => <section key={i}>
                                <span className='panel-block notification is-warning has-text-black'>
                                    <span className="panel-icon" onClick={() => this.removeItem(i, 't')}>
                                        <i className="fas fa-times"></i>
                                    </span>
                                    {topic}
                                </span>
                            </section>)}
                    </section>
                </section>
                {/* Message */}
                <section className="field">
                    <label className="label">Message</label>
                    <section className="control" onBlur={() => this.setState({body: document.getElementById('bodyInput').value})}>
                        <textarea id='bodyInput' className="textarea" placeholder="The is the body of your message."></textarea>
                    </section>
                </section>
                {/* Buttons */}
                <section className="field is-grouped">
                    <section className="control">
                        <button className="button is-link" onClick={() => this.submitMessage()}>Submit</button>
                    </section>
                    <section className="control">
                        <button className="button is-danger">Cancel</button>
                    </section>
                </section>
            </section>
        )
    }

    addItem = (item, type) => {
        let temp
        if (type === 'i') {
            temp = [...this.state.images]
            temp.push(item)
            this.setState({images: temp})
        } else if (type === 'l') {
            temp = [...this.state.links]
            temp.push(item)
            this.setState({links: temp})
        } else if (type === 't') {
            temp = [...this.state.topics];
            temp.push(item)
            this.setState({topics: temp})
        }
    }

    removeItem = (itemIndex, type) => {
        let temp
        if (type === 'i') {
            temp = [...this.state.images]
            this.setState({
                images: temp.filter((image, i) => i !== itemIndex)
            })
        } else if (type === 'l') {
            temp = [...this.state.links]
            this.setState({
                links: temp.filter((link, i) => i !== itemIndex)
            })
        } else if (type === 't') {
            temp = [...this.state.topics];
            this.setState({
                topics: temp.filter((topic, i) => i !== itemIndex)
            })
        }
    }

    submitMessage = () => {
        console.log(this.state)
    }
}

export default CreateNews;
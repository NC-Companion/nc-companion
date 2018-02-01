import React from 'react';
import Moment from 'moment';
import {postNewEvent} from '../firebase/refs/eventsRef'
import {SmallField, toggleField, StackField} from './formComponents'

import './CreateEvent.css'

class CreateEvent extends React.Component {

    state = {
        author: '',
        body: '',
        calendar: '',
        type: null,
        date: '',
        time: '',
        imageUrl: [],
        isLecture: false,
        mandatory: true,
        resources: [],
        tag: [],
        title: ''
    }

    render() {
        return (
            <section className='createEvent columns'>
                <section className='formLeft column isDark is-two-thirds section noTBPadding'>
                    <section className='hero height100 section isWhite'>
                        <section className='hero-head'>
                            <section className='formHeader title has-text-danger'>Create event</section>
                        </section>
                        <section className='hero-body customScroll height100'>

                            <form
                                className=''
                                onSubmit={(e) => {
                                this.submitMessage(e)
                            }}>
                                <SmallField
                                    label="Title"
                                    onBlur={res => this.setState({title: res})}
                                    inputId='title'
                                    placeholder='Add a title.'
                                    required={true}
                                    icon='fas fa-font'/>

                                <section className='columns'>
                                    <section className='column'>
                                        {toggleField({
                                            label: 'Is this a mandatory event?',
                                            onClick: state => this.toggleVal('mandatory', state),
                                            state: this.state.mandatory
                                        })}
                                    </section>
                                    <section className='column'>
                                        {this.state.mandatory && toggleField({
                                            label: 'Is this a lecture?',
                                            onClick: state => this.toggleVal('isLecture', state),
                                            state: this.state.isLecture
                                        })}
                                    </section>
                                </section>

                                <SmallField
                                    label="Author"
                                    onBlur={res => this.setState({author: res})}
                                    inputId='author'
                                    placeholder={this.props.authUser.displayName || 'Add your name to the event.'}
                                    icon='fas fa-user'/>

                                <SmallField
                                    label="Calendar"
                                    onBlur={res => this.setState({calendar: res})}
                                    inputId='calendar'
                                    required={true}
                                    placeholder='Where would you like to post to?.'
                                    icon='fas fa-calendar-plus'/>

                                <section className='columns'>
                                    <section className='column'>
                                        <SmallField
                                            label="Date"
                                            onBlur={res => this.setState({date: res})}
                                            inputId='date'
                                            inputType='date'
                                            required={true}
                                            placeholder='When is your event.'
                                            icon='fas fa-bell'/>
                                    </section>
                                    <section className='column'>
                                        <SmallField
                                            label="Time"
                                            onBlur={res => this.setState({time: res})}
                                            inputId='time'
                                            inputType='time'
                                            required={true}
                                            placeholder='When is your event.'
                                            icon='fas fa-clock'/>
                                    </section>
                                </section>

                                <StackField
                                    params={{
                                    label: `Images`,
                                    inputId: 'image',
                                    placeholder: 'Add a new image URL',
                                    icon: 'fa fa-image',
                                    button: 'Add Image',
                                    store: this.state.imageUrl,
                                    storeName: 'imageUrl',
                                    addItem: this.addItem,
                                    removeItem: this.removeItem
                                }}/>
                                <StackField
                                    params={{
                                    label: `Resources`,
                                    inputId: 'resources',
                                    placeholder: 'Add a new resource URL',
                                    icon: 'fa fa-paperclip',
                                    button: 'Add resource',
                                    store: this.state.resources,
                                    storeName: 'resources',
                                    addItem: this.addItem,
                                    removeItem: this.removeItem
                                }}/>
                                <StackField
                                    params={{
                                    label: `Tags`,
                                    inputId: 'tag',
                                    placeholder: 'Add a new tag',
                                    icon: 'fa fa-hashtag',
                                    button: 'Add tag',
                                    store: this.state.tag,
                                    storeName: 'tag',
                                    addItem: this.addItem,
                                    removeItem: this.removeItem
                                }}/>

                                <SmallField
                                    label="Message"
                                    onBlur={res => this.setState({body: res})}
                                    inputId='message'
                                    inputType='long'
                                    placeholder='Add a body to your event.'
                                    required={true}
                                    icon='fas fa-bullhorn'/>

                                <button
                                    type='submit'
                                    className='button is-size-medium is-danger is-pulled-right'>Submit</button>
                            </form>

                        </section>
                        <section className='hero-foot'></section>
                    </section>
                </section>
                <section className='formRight column isDark is-one-third section'>
                    <section className='hero height100'>
                        <section className='hero-head title is-size-3 has-text-white'>Guide.<section className='is-size-6 is-italic has-text-weight-light'><span className='has-text-danger'>*required</span></section></section>
                        <section className='hero-body'>
                        <ul className='is-size-4'>
                            <li className='has-text-danger'>Title</li>
                            <li className='has-text-danger'>Author</li>
                            <li className='has-text-danger'>Calendar</li>
                            <li className='has-text-danger'>Date & Time</li>
                            <li className='has-text-success'>Images</li>
                            <li className='has-text-success'>Resources</li>
                            <li className='has-text-success'>Tags</li>
                            <li className='has-text-danger'>Message</li>
                        </ul>
                        </section>
                        <section className='hero-foot'></section>
                    </section>
                </section>
            </section>
        )
    }

    addItem = (item, storeName) => {
        const temp = this.state[`${storeName}`];
        temp.push(item);
        const tempState = {};
        tempState[`${storeName}`] = temp;
        this.setState(tempState)
    }

    removeItem = (itemIndex, storeName) => {
        const temp = this.state[`${storeName}`];
        const tempState = {};
        tempState[`${storeName}`] = temp.filter((item, i) => i !== itemIndex)
        this.setState(tempState)
    }

    toggleVal = (valToToggle, toggleState) => {
        const temp = this.state[`${valToToggle}`];
        if (temp !== toggleState) {
            const tempState = {};
            tempState[`${valToToggle}`] = !temp
            this.setState(tempState)
        }
    }

    submitMessage = (e) => {
        e.preventDefault()
        const event = this.state
        const eventObj = {
            author: event.author,
            authorUid: this.props.authUser.uid,
            body: event.body,
            calendar: event.calendar,
            creationDate: Moment().format(),
            eventDate: `${event.date}T${event.time}:00+00:00`,
            imageUrl: event.imageUrl,
            mandatory: event.mandatory,
            resources: event.resources,
            tag: event.tag,
            title: event.title,
            type: event.isLecture
                ? 'lecture'
                : 'announcement'
        }
        postNewEvent(eventObj).then(console.log)
        window.history.back()
    }
}

export default CreateEvent;
import React from "react";
import Moment from 'moment';
import {Link} from 'react-router-dom'

import './CalendarOverlay.css'

class CalendarOverlay extends React.Component {

  state = {
    optional: true,
    mandatory: true,
    global: true,
    cohort: true,
    user: true
  }

  render() {
    const {events, onDeselect, info} = this.props;
    console.log(info)
    return (
      <section className="overlayBody">
        <section class="hero overlay-hero is-medium">
          <div class="hero-head">
            <nav class="navbar">
              <div class="container has-text-centered"></div>
            </nav>
          </div>

          <div class="hero-body">
            <div class="container has-text-left">
              <section className='box hero overlay-body isDark'>

                <section className='hero-head title has-text-white'>
                  <section className='columns'>
                    <section className='column is-four-fifths is-size-4'>
                      <section>{Moment(info.date).format('dddd Do MMMM YYYY')}</section>
                    </section>
                    <section className='column is-one-fifths'>
                      <span
                        className='is-pulled-right button is-size-6 is-rounded is-danger'
                        onClick={() => onDeselect()}>
                        <i class="fa fa-times" aria-hidden="true"></i>
                      </span>
                    </section>
                  </section>
                </section>
                <section className='hero-body' style={{height: '40%'}}>
                  <section
                    className='section is-size-6 customScroll'
                    style={{
                    height: '90%',
                    paddingTop: '0',
                    paddingBottom: '0'
                  }}>
                    {info
                      .cohort
                      .concat(info.global)
                      .concat(info.user)
                      .map(event => {
                        return (this.state[event.calendar] || this.state[event.type]) && 
                        <Link to={event.isLecture && `/lecture/${event.uid}`} stuff='aaron' ><section className={`box notification isHover is-${this.parentCalendar(event.calendar)}`} onClick={() => this.props.displayEvent(event)}>
                          <section>
                            <section className='is-size-4 has-text-weight-bold columns'>
                              <span className='column is-four-fifths'>{event.title}</span>
                              <span className='column is-one-fifths'>
                                <span className='is-pulled-right'>{Moment(event.dueDate).format('HH:MM')}</span>
                              </span>
                            </section>
                            <section className='is-capitalized has-text-weight-bold'>
                              <span className='has-text-black'>{event.isLecture
                                  ? 'Lecture'
                                  : event.type}</span>
                              <span className='is-pulled-right'>{event.author}</span>
                            </section>
                          </section>
                        </section></Link>
                      })}
                  </section>
                </section>
                <div class="hero-foot">
                  <nav class="tabs">
                    <div class="container">
                      <ul className='field is-grouped'>
                        <li className='control'>
                          <a className='has-text-white'>Mandatory</a>
                        </li>
                        <li className='control'>
                          <a
                            className={`is-danger button ${this.state.optional
                            ? ''
                            : 'is-outlined'}`}
                            onClick={() => this.toggleCondition('optional')}>Optional</a>
                        </li>
                      </ul>
                    </div>
                    <div class="container">
                      <ul className='is-pulled-right field is-grouped'>
                        <li className='control'>
                          <a
                            className={`is-primary button ${ !this.state.global && 'is-outlined'}`}
                            onClick={() => this.toggleCondition('global')}>Global</a>
                        </li>
                        <li className='control'>
                          <a
                            className={`is-success button ${ !this.state.cohort && 'is-outlined'}`}
                            onClick={() => this.toggleCondition('cohort')}>Cohort</a>
                        </li>
                        <li className='control'>
                          <a
                            className={`is-warning button ${ !this.state.user && 'is-outlined'}`}
                            onClick={() => this.toggleCondition('user')}>Personal</a>
                        </li>
                      </ul>
                    </div>
                  </nav>
                </div>
              </section>
            </div>
          </div>
        </section>
      </section>
    );
  }
  parentCalendar = calendar => {
    if (calendar === 'global') 
      return 'primary';
    else if (calendar === 'cohort') 
      return 'success';
    else if (calendar === 'user') 
      return 'warning';
    }
  
  toggleCondition = condition => {
    if (condition === 'global') 
      this.setState({
        global: !this.state.global
      });
    else if (condition === 'cohort') 
      this.setState({
        cohort: !this.state.cohort
      });
    else if (condition === 'user') 
      this.setState({
        user: !this.state.user
      });
    else if (condition === 'optional') 
      this.setState({
        optional: !this.state.optional
      });
    }
  
}

export default CalendarOverlay;

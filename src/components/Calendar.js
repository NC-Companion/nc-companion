import React from "react";
import withAuthorization, {authCondition} from "./auth/withAuthorization";
import ReactCalendar from "rc-calendar/lib/FullCalendar";
import Select from "rc-select";
import CalendarOverlay from './CalendarOverlay';
import Moment from "moment";
import {Link} from 'react-router-dom'

import {calendarEvents} from '../firebase/queries/queryEvents';

import "./Calendar.css";
import "rc-calendar/assets/index.css";
import "rc-select/assets/index.css";


class Calendar extends React.Component {

  state = {
    CalOverlay: {
      date: '',
      cohort: [],
      global: [],
      user: []
    },

    displayEvent: {},
    cohortCalendar: {
    },
    globalCalendar: {
    },
    userCalendar: {
    }
  };;

  componentDidMount() {
    calendarEvents(this.props.authUser.uid).then(res => {this.setState({
      cohortCalendar: res.cohort,
      globalCalendar: res.global,
      userCalendar: res.student,
    })})
  }

  render() {
    return (
      <section className="calendar columns">
        {this.state.CalOverlay.date && <CalendarOverlay info={this.state.CalOverlay} userID={this.props.authUser.uid} onDeselect={this.onDeselect} displayEvent={this.setDisplayEvent}/>}
        <section className='column is-two-thirds isDark calendarLeftPane'>
          <section className='calendarNav'>
            <section className='calNavSection columns'>
              <section className='column is-paddingless'>
                <section className='title has-text-white'>Calendar</section>
              </section>
              <section className='calDashButtons column is-paddingless'>
                <section className='field is-grouped is-pulled-right'>
                  <Link to='/home' className='control'>
                    <a className='button is-large has-text-danger'>
                      <i class="fas fa-home" aria-hidden="true"></i>
                    </a>
                  </Link>
                  <a
                    target='_blank'
                    href='http://www.github.com'
                    className="button control is-large has-text-dark">
                    <i class="fab fa-github" aria-hidden="true"/>
                  </a>
                  <a
                    target='_blank'
                    href='http://www.slack.com'
                    className="button control is-large has-text-danger">
                    <i class="fab fa-slack" aria-hidden="true"/>
                  </a>
                  <a
                    target='_blank'
                    href='http://www.google.co.uk'
                    className="button control is-large has-text-dark">
                    <i class="fab fa-google" aria-hidden="true"/>
                  </a>
                </section>
              </section>
            </section>
          </section>
          <section className='calendarContainer'>
            <ReactCalendar
              Select={Select}
              fullscreen
              onSelect={this.onSelect}
              dateCellContentRender={this.dateCell}/>
          </section>
        </section>
        <section className='column is-one-third isWhite height100'>

          {this.state.displayEvent.uid && <section className='hero height100'>
            <section className='hero-head title'>
              <section className='subtitle columns has-text-weight-bold'>
                <section className='column is-three-fifths is-size-5'>
                  {this.state.displayEvent.title}
                  <section className='is-size-6 has-text-danger'>{this.state.displayEvent.author}</section>
                </section>
                <section className='column is-two-fifths'>
                  <section className='is-pulled-right is-size-6 has-text-weight-light'>{Moment().format('DD-MM-YYYY')}</section>
                </section>
              </section>
            </section>
            <section className='hero-body'>{this.state.displayEvent.body}</section>
            <section className='hero-foot'>Boy</section>
          </section>}

        </section>
      </section>
    );
  }

  onSelect = date => {
    const dateGlobalCal = this.state.globalCalendar[Moment(date).format('DDMMYYYY')];
    const dateCohortCal = this.state.cohortCalendar[Moment(date).format('DDMMYYYY')];
    const dateUserCal = this.state.userCalendar[Moment(date).format('DDMMYYYY')];

    this.setState({
      CalOverlay: {
        date,
        global: dateGlobalCal
          ? dateGlobalCal
          : [],
        cohort: dateCohortCal
          ? dateCohortCal
          : [],
        user: dateUserCal
          ? dateUserCal
          : []
      }
    })
  };

  onDeselect = () => {
    this.setState({
      CalOverlay: {
        date: '',
        cohort: [],
        global: [],
        user: []
      }
    })
  }

  dateCell = date => {
    const key = Moment(date).format("DDMMYYYY");
    const allCalendars = Object.keys(this.state.cohortCalendar).concat(Object.keys(this.state.globalCalendar)).concat(Object.keys(this.state.userCalendar))
    return (
      <section className="cellContent is-pulled-right">
        <section>{Moment(date).format("D")}</section>
        {allCalendars.includes(key) && this.retriveCellVal(key)}
      </section>
    );
  };

  retriveCellVal = date => {
    let DateOnAllCalendars = [];

    const DateOnGlobalCal = this.state.globalCalendar[date];
    const DateOnCohortCal = this.state.cohortCalendar[date];
    const DateOnUserCal = this.state.userCalendar[date];

    // const dateGlobalCal = this.state.globalCalendar[Moment(date).format('DDMMYYYY')];
    // const dateCohortCal = this.state.cohortCalendar[Moment(date).format('DDMMYYYY')];
    // const dateUserCal = this.state.userCalendar[Moment(date).format('DDMMYYYY')];

    if (DateOnGlobalCal) DateOnAllCalendars = DateOnAllCalendars.concat(DateOnGlobalCal);
    if (DateOnCohortCal) DateOnAllCalendars = DateOnAllCalendars.concat(DateOnCohortCal);
    if (DateOnUserCal) DateOnAllCalendars = DateOnAllCalendars.concat(DateOnUserCal);
    
    // this.state.globalCalendar[date]
    //   .concat(this.state.cohortCalendar[date])
    //   .concat(this.state.userCalendar[date]);

    const Lectures = DateOnAllCalendars
      .filter(eve => eve.isLecture === true)
      .length;
    const Optional = DateOnAllCalendars
      .filter(eve => (eve.type === 'optional' && eve.isLecture === false))
      .length
    const Mandatory = DateOnAllCalendars
      .filter(eve => (eve.type === 'mandatory' && !eve.isLecture))
      .length
    return (
      <section className="eventsCount">
        {Lectures > 0 && <section className="calendarCounter has-text-black">
          Lectures: {Lectures}
        </section>}
        {Mandatory > 0 && <section className="calendarCounter has-text-danger">
          Mandatory: {Mandatory}
        </section>}
        {Optional > 0 && <section className="calendarCounter has-text-link">
          Optional: {Optional}
        </section>}
      </section>
    )
  }

  setDisplayEvent = eve => {
    this.setState({displayEvent: eve})
    this.onDeselect()
  }
}

export default withAuthorization(authCondition)(Calendar);

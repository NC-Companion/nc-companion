import React from "react";
import withAuthorization, { authCondition } from "./auth/withAuthorization";
import ReactCalendar from "rc-calendar/lib/FullCalendar";
import Select from "rc-select";
import CalendarOverlay from './CalendarOverlay';
import Moment from "moment";

import "./Calendar.css";
import "rc-calendar/assets/index.css";
import "rc-select/assets/index.css";

const CalendarStyle = {
  margin: "auto",
  width: "90vw",
  height: "auto",
  fontSize: ".9em"
};

class Calendar extends React.Component {
  state = {
    cohortCalendar: {lectures: {
      10012018: {
        title: "Why we should all use sections and not divs.",
        tutor: "Mauro"
      },
      18012018: {
        title: "Recur what?",
        tutor: "Sam"
      },
      19012018: {
        title: "Let us Mitch together.",
        tutor: "JD"
      },
      16012018: {
        title: "Life as a meme.",
        tutor: "Mitch"
      },
      24012018: {
        title: "My last name is not Rider, it's Ryder!",
        tutor: "Harriett"
      }
    }},
    globaltCalendar: {},
    userCalendar: {},
  };

  render() {
    return (
      <section className="calendar">
        <CalendarOverlay />
        <section className="title has-text-danger">Cohort 2</section>
        <ReactCalendar
          style={CalendarStyle}
          Select={Select}
          fullscreen
          onSelect={this.onSelect}
          disabledDate={this.isDisabled}
          dateCellContentRender={this.dateCell}
        />
      </section>
    );
  }

  onSelect = date => {
    alert(JSON.stringify(date));
  };

  isDisabled = date => {
    // console.log(date) const nonDisabledDays = Object.keys(this.state.lectures)
    // return !nonDisabledDays.includes(Moment(date).format('DDMMYYYY'))
  };

  dateCell = date => {
    const key = Moment(date).format("DDMMYYYY");
    return (
      <section className="cellContent is-pulled-right">
        <section>{Moment(date).format("D")}</section>
        {this.state.cohortCalendar.lectures[`${key}`] && (
          <section className="lectureDetails">
            <section className="lectureTopic">
              {this.state.cohortCalendar.lectures[`${key}`].title}
            </section>
            <section className="lectureTutor">
              <span className='is-pulled-left'>
                <span className='cohortCalendarCount has-text-danger'>+{Object.keys(this.state.cohortCalendar).length}</span>
              </span>
              <span className=''>{this.state.cohortCalendar.lectures[`${key}`].tutor}</span>
            </section>
          </section>
        )}
      </section>
    );
  };
}

export default withAuthorization(authCondition)(Calendar);

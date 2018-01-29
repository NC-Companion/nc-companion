import React from "react";
import withAuthorization, { authCondition } from "./auth/withAuthorization";
import ReactCalendar from "rc-calendar/lib/FullCalendar";
import Select from "rc-select";
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
    lectures: {
      10012018: {
        title: "Node.js and how it has affected over several devs.",
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
    }
  };

  render() {
    return (
      <section className="calendar section">
        <section className="title">Cohort 2</section>
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
        {this.state.lectures[`${key}`] && (
          <section className="lectureDetails">
            <section className="lectureTopic">
              {this.state.lectures[`${key}`].title}
            </section>
            <section className="lectureTutor">
              {this.state.lectures[`${key}`].tutor}
            </section>
          </section>
        )}
      </section>
    );
  };
}

export default withAuthorization(authCondition)(Calendar);

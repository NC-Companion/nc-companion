import React from "react";
import withAuthorization, {authCondition} from "./auth/withAuthorization";
import ReactCalendar from "rc-calendar/lib/FullCalendar";
import Select from "rc-select";
import CalendarOverlay from './CalendarOverlay';
import Moment from "moment";

import "./Calendar.css";
import "rc-calendar/assets/index.css";
import "rc-select/assets/index.css";

const CalendarStyle = {
  margin: "auto",
  boxShadow: 'none',
  borderRadius: '0',
  border: '0',
  width: "90vw",
  fontSize: ".9em"
};

class Calendar extends React.Component {
  state = {
    CalOverlay: {date:'', cohort: [], global: [], user: []},
    cohortCalendar: {
      10012018: [
        {
          uid: 'lgelvlscdbcvzcdvafdvvcaf',
          type: 'mandatory',
          title: "Why we should all use sections and not divs.",
          body: 'lorem ipsum for life.',
          tag: [
            'qdq', 'qwdwdq', 'qwdqwdqw'
          ],
          imgUrl: 'sdsddsssadsa',
          dueDate: '2018-01-10T02:22:02+00:00',
          calendarID: 'cohort',
          resourcesID: 'sssdsddds',
          author: "Mauro Gesteso",
          isLecture: true,
          commentID: 'cdkskhshks'
        }
      ],
      11012018: [
        {
          uid: 'lgelvlscdbcvzcdvafdvvcbf',
          type: 'optional',
          title: "Make Tesco pay for their sins.",
          body: 'Milk costs too much.',
          tag: [
            'tesco', 'destroy', 'milk'
          ],
          imgUrl: 'https://secure.tesco.com/account/images/tesco.svg',
          dueDate: '2018-01-11T12:32:02+00:00',
          calendarID: 'cohort',
          resourcesID: 'sssdsddds',
          author: "Paul Pogba",
          isLecture: false,
          commentID: 'cdkskhshks'
        },
        {
          uid: 'lgelvlscdbcvzcdvafdvvcef',
          type: 'mandatory',
          title: "Come and learn how not to code.",
          body: 'Apparently divs are bad.',
          tag: [
            'code', 'frog', 'spider'
          ],
          imgUrl: 'https://cdn-images-1.medium.com/max/1400/1*C1959kFqh9yIuvbOZKHiEQ.png',
          dueDate: '2018-01-30T12:32:02+00:00',
          calendarID: 'cohort',
          resourcesID: 'sssdsddds',
          author: "Mitch Samuels",
          isLecture: true,
          commentID: 'cdkskhshks'
        },
        {
          uid: 'lgelvlscdbcvzcdvafdvvcaf',
          type: 'mandatory',
          title: "Why my fake data is the best fake data in the fakedataverse.",
          body: `"if (fakeData) return 'Yeah Detroit!'
                 else return 'noooooooo'"`,
          tag: [
            'yeah', 'detroit', 'bruh'
          ],
          imgUrl: 'sdsddsssadsa',
          dueDate: '2018-01-30T12:32:02+00:00',
          calendarID: 'cohort',
          resourcesID: 'sssdsddds',
          author: "Brother Barker",
          isLecture: true,
          coommentID: 'cdkskhshks'
        }
      ],
      21012018: [
        {
          uid: 'lgelvlscdbcvzcdvafdvvcmf',
          type: 'mandatory',
          title: "Amazon will change the world, by hiring you!!!!!",
          body: 'We are hiring.',
          tag: [
            'Amazon', 'Hire', 'Job'
          ],
          imgUrl: 'https://www.eachbay.com/uploads/allimg/1703/36_170324094938_1.jpg',
          dueDate: '2018-01-30T12:32:02+00:00',
          calendarID: 'cohort',
          resourcesID: 'sssdsddds',
          author: "Aaron Smith",
          isLecture: false,
          commentID: 'cdkskhshks'
        },
        {
          uid: 'lgelvlscdbcvzcdvafdvvcef',
          type: 'optional',
          title: "how to code autonomous cars",
          body: `import ai from 'artificial-intelligence
                ai.drive()
                 if(ai.doingToCrash) return this.dont()`,
          tag: [
            'food', 'frog', 'spider'
          ],
          imgUrl: 'https://cdn-images-1.medium.com/max/1400/1*C1959kFqh9yIuvbOZKHiEQ.png',
          dueDate: '2018-01-30T12:32:02+00:00',
          calendarID: 'cohort',
          resourcesID: 'sssdsddds',
          author: "mitchin",
          isLecture: false,
          commentID: 'cdkskhshks'
        }
      ],
      13012018: [
        {
          uid: 'lgelvlscdbcvzcdvafdvvaaf',
          type: 'mandatory',
          title: "Lets have fun",
          body: 'After Party.',
          tag: [
            'Party', 'dream', 'relax'
          ],
          imgUrl: 'https://www.eachbay.com/uploads/allimg/1703/36_170324094938_1.jpg',
          dueDate: '2018-01-30T12:32:02+00:00',
          calendarID: 'cohort',
          resourcesID: 'sssdsddds',
          author: "Bradley Black",
          isLecture: false,
          commentID: 'cdkskhshks'
        }
      ],
      31012018:[
        {
        uid: 'lgelvlscdbcvzcdvafdvvcef',
        type: 'optional',
        title: "LEARN A NEW LANGUAGE WALAWALAWALAWALAWALAbingbang",
        body: `yes`,
        tag: [
          'food', 'frog', 'spider'
        ],
        imgUrl: 'https://cdn-images-1.medium.com/max/1400/1*C1959kFqh9yIuvbOZKHiEQ.png',
        dueDate: '2018-01-30T12:32:02+00:00',
        calendarID: 'cohort',
        resourcesID: 'sssdsddds',
        author: "mitchin",
        isLecture: false,
        commentID: 'cdkskhshks'
      }]
    },
    globalCalendar: {
      10012018: [
        {
          uid: 'lgelvlscdbcvzcdvafdvvcaf',
          type: 'mandatory',
          title: "Why we should all use sections and not divs.",
          body: 'lorem ipsum for life.',
          tag: [
            'qdq', 'qwdwdq', 'qwdqwdqw'
          ],
          imgUrl: 'sdsddsssadsa',
          dueDate: '2018-01-10T02:22:02+00:00',
          calendarID: 'global',
          resourcesID: 'sssdsddds',
          author: "Mauro Gesteso",
          isLecture: true,
          commentID: 'cdkskhshks'
        }
      ],
      11012018: [
        {
          uid: 'lgelvlscdbcvzcdvafdvvcbf',
          type: 'optional',
          title: "Make Tesco pay for their sins.",
          body: 'Milk costs too much.',
          tag: [
            'tesco', 'destroy', 'milk'
          ],
          imgUrl: 'https://secure.tesco.com/account/images/tesco.svg',
          dueDate: '2018-01-11T12:32:02+00:00',
          calendarID: 'global',
          resourcesID: 'sssdsddds',
          author: "Paul Pogba",
          isLecture: false,
          commentID: 'cdkskhshks'
        },
        {
          uid: 'lgelvlscdbcvzcdvafdvvcef',
          type: 'mandatory',
          title: "Come and learn how not to code.",
          body: 'Apparently divs are bad.',
          tag: [
            'code', 'frog', 'spider'
          ],
          imgUrl: 'https://cdn-images-1.medium.com/max/1400/1*C1959kFqh9yIuvbOZKHiEQ.png',
          dueDate: '2018-01-30T12:32:02+00:00',
          calendarID: 'global',
          resourcesID: 'sssdsddds',
          author: "Mitch Samuels",
          isLecture: true,
          commentID: 'cdkskhshks'
        },
        {
          uid: 'lgelvlscdbcvzcdvafdvvcaf',
          type: 'mandatory',
          title: "Why my fake data is the best fake data in the fakedataverse.",
          body: `"if (fakeData) return 'Yeah Detroit!'
                 else return 'noooooooo'"`,
          tag: [
            'yeah', 'detroit', 'bruh'
          ],
          imgUrl: 'sdsddsssadsa',
          dueDate: '2018-01-30T12:32:02+00:00',
          calendarID: 'global',
          resourcesID: 'sssdsddds',
          author: "Brother Barker",
          isLecture: true,
          coommentID: 'cdkskhshks'
        }
      ],
      21012018: [
        {
          uid: 'lgelvlscdbcvzcdvafdvvcmf',
          type: 'mandatory',
          title: "Amazon will change the world, by hiring you!!!!!",
          body: 'We are hiring.',
          tag: [
            'Amazon', 'Hire', 'Job'
          ],
          imgUrl: 'https://www.eachbay.com/uploads/allimg/1703/36_170324094938_1.jpg',
          dueDate: '2018-01-30T12:32:02+00:00',
          calendarID: 'global',
          resourcesID: 'sssdsddds',
          author: "Aaron Smith",
          isLecture: false,
          commentID: 'cdkskhshks'
        },
        {
          uid: 'lgelvlscdbcvzcdvafdvvcef',
          type: 'optional',
          title: "how to code autonomous cars",
          body: `import ai from 'artificial-intelligence
                ai.drive()
                 if(ai.doingToCrash) return this.dont()`,
          tag: [
            'food', 'frog', 'spider'
          ],
          imgUrl: 'https://cdn-images-1.medium.com/max/1400/1*C1959kFqh9yIuvbOZKHiEQ.png',
          dueDate: '2018-01-30T12:32:02+00:00',
          calendarID: 'global',
          resourcesID: 'sssdsddds',
          author: "mitchin",
          isLecture: false,
          commentID: 'cdkskhshks'
        }
      ],
      13012018: [
        {
          uid: 'lgelvlscdbcvzcdvafdvvaaf',
          type: 'mandatory',
          title: "Lets have fun",
          body: 'After Party.',
          tag: [
            'Party', 'dream', 'relax'
          ],
          imgUrl: 'https://www.eachbay.com/uploads/allimg/1703/36_170324094938_1.jpg',
          dueDate: '2018-01-30T12:32:02+00:00',
          calendarID: 'global',
          resourcesID: 'sssdsddds',
          author: "Bradley Black",
          isLecture: false,
          commentID: 'cdkskhshks'
        }
      ],
      31012018:[
        {
        uid: 'lgelvlscdbcvzcdvafdvvcef',
        type: 'optional',
        title: "LEARN A NEW LANGUAGE WALAWALAWALAWALAWALAbingbang",
        body: `yes`,
        tag: [
          'food', 'frog', 'spider'
        ],
        imgUrl: 'https://cdn-images-1.medium.com/max/1400/1*C1959kFqh9yIuvbOZKHiEQ.png',
        dueDate: '2018-01-30T12:32:02+00:00',
        calendarID: 'global',
        resourcesID: 'sssdsddds',
        author: "mitchin",
        isLecture: false,
        commentID: 'cdkskhshks'
      }]
    },
    userCalendar: {
      10012018: [
        {
          uid: 'lgelvlscdbcvzcdvafdvvcaf',
          type: 'mandatory',
          title: "Why we should all use sections and not divs.",
          body: 'lorem ipsum for life.',
          tag: [
            'qdq', 'qwdwdq', 'qwdqwdqw'
          ],
          imgUrl: 'sdsddsssadsa',
          dueDate: '2018-01-10T02:22:02+00:00',
          calendarID: 'user',
          resourcesID: 'sssdsddds',
          author: "Mauro Gesteso",
          isLecture: true,
          commentID: 'cdkskhshks'
        }
      ],
      11012018: [
        {
          uid: 'lgelvlscdbcvzcdvafdvvcbf',
          type: 'optional',
          title: "Make Tesco pay for their sins.",
          body: 'Milk costs too much.',
          tag: [
            'tesco', 'destroy', 'milk'
          ],
          imgUrl: 'https://secure.tesco.com/account/images/tesco.svg',
          dueDate: '2018-01-11T12:32:02+00:00',
          calendarID: 'user',
          resourcesID: 'sssdsddds',
          author: "Paul Pogba",
          isLecture: false,
          commentID: 'cdkskhshks'
        },
        {
          uid: 'lgelvlscdbcvzcdvafdvvcef',
          type: 'mandatory',
          title: "Come and learn how not to code.",
          body: 'Apparently divs are bad.',
          tag: [
            'code', 'frog', 'spider'
          ],
          imgUrl: 'https://cdn-images-1.medium.com/max/1400/1*C1959kFqh9yIuvbOZKHiEQ.png',
          dueDate: '2018-01-30T12:32:02+00:00',
          calendarID: 'user',
          resourcesID: 'sssdsddds',
          author: "Mitch Samuels",
          isLecture: true,
          commentID: 'cdkskhshks'
        },
        {
          uid: 'lgelvlscdbcvzcdvafdvvcaf',
          type: 'mandatory',
          title: "Why my fake data is the best fake data in the fakedataverse.",
          body: `"if (fakeData) return 'Yeah Detroit!'
                 else return 'noooooooo'"`,
          tag: [
            'yeah', 'detroit', 'bruh'
          ],
          imgUrl: 'sdsddsssadsa',
          dueDate: '2018-01-30T12:32:02+00:00',
          calendarID: 'user',
          resourcesID: 'sssdsddds',
          author: "Brother Barker",
          isLecture: true,
          coommentID: 'cdkskhshks'
        }
      ],
      21012018: [
        {
          uid: 'lgelvlscdbcvzcdvafdvvcmf',
          type: 'mandatory',
          title: "Amazon will change the world, by hiring you!!!!!",
          body: 'We are hiring.',
          tag: [
            'Amazon', 'Hire', 'Job'
          ],
          imgUrl: 'https://www.eachbay.com/uploads/allimg/1703/36_170324094938_1.jpg',
          dueDate: '2018-01-30T12:32:02+00:00',
          calendarID: 'user',
          resourcesID: 'sssdsddds',
          author: "Aaron Smith",
          isLecture: false,
          commentID: 'cdkskhshks'
        },
        {
          uid: 'lgelvlscdbcvzcdvafdvvcef',
          type: 'optional',
          title: "how to code autonomous cars",
          body: `import ai from 'artificial-intelligence
                ai.drive()
                 if(ai.doingToCrash) return this.dont()`,
          tag: [
            'food', 'frog', 'spider'
          ],
          imgUrl: 'https://cdn-images-1.medium.com/max/1400/1*C1959kFqh9yIuvbOZKHiEQ.png',
          dueDate: '2018-01-30T12:32:02+00:00',
          calendarID: 'user',
          resourcesID: 'sssdsddds',
          author: "mitchin",
          isLecture: false,
          commentID: 'cdkskhshks'
        }
      ],
      13012018: [
        {
          uid: 'lgelvlscdbcvzcdvafdvvaaf',
          type: 'mandatory',
          title: "Lets have fun",
          body: 'After Party.',
          tag: [
            'Party', 'dream', 'relax'
          ],
          imgUrl: 'https://www.eachbay.com/uploads/allimg/1703/36_170324094938_1.jpg',
          dueDate: '2018-01-30T12:32:02+00:00',
          calendarID: 'user',
          resourcesID: 'sssdsddds',
          author: "Bradley Black",
          isLecture: false,
          commentID: 'cdkskhshks'
        }
      ],
      31012018:[
        {
        uid: 'lgelvlscdbcvzcdvafdvvcef',
        type: 'optional',
        title: "LEARN A NEW LANGUAGE WALAWALAWALAWALAWALAbingbang",
        body: `yes`,
        tag: [
          'food', 'frog', 'spider'
        ],
        imgUrl: 'https://cdn-images-1.medium.com/max/1400/1*C1959kFqh9yIuvbOZKHiEQ.png',
        dueDate: '2018-01-30T12:32:02+00:00',
        calendarID: 'user',
        resourcesID: 'sssdsddds',
        author: "mitchin",
        isLecture: false,
        commentID: 'cdkskhshks'
      }]
    }
  };

  render() {
    return (
      <section className="calendar height100">
        {this.state.CalOverlay.date && <CalendarOverlay info={this.state.CalOverlay} onDeselect={this.onDeselect}/>}
        <ReactCalendar
          style={CalendarStyle}
          Select={Select}
          fullscreen
          onSelect={this.onSelect}
          dateCellContentRender={this.dateCell}/>
      </section>
    );
  }

  onSelect = date => {
    const dateGlobalCal = this.state.globalCalendar[Moment(date).format('DDMMYYYY')];
    const dateCohortCal = this.state.cohortCalendar[Moment(date).format('DDMMYYYY')];
    const dateUserCal = this.state.userCalendar[Moment(date).format('DDMMYYYY')];
    this.setState({CalOverlay: {date, global: dateGlobalCal ? dateGlobalCal : [], cohort: dateCohortCal ? dateCohortCal : [], user: dateUserCal ? dateUserCal : []}})
  };

  onDeselect = () => {
    this.setState({CalOverlay: {date:'', cohort: [], global: [], user: []}})
  }

  dateCell = date => {
    const key = Moment(date).format("DDMMYYYY");
    return (
      <section className="cellContent is-pulled-right">
        <section>{Moment(date).format("D")}</section>
        {Object.keys(this.state.cohortCalendar).includes(key) && this.retriveCellVal(key)}
      </section>
    );
  };

  retriveCellVal = date => {
    const DateOnAllCalendars = this.state.globalCalendar[date].concat(this.state.cohortCalendar[date]).concat(this.state.userCalendar[date]);
    const Lectures = DateOnAllCalendars.filter(eve => eve.isLecture === true).length;
    const Optional = DateOnAllCalendars.filter(eve => eve.type === 'optional').length
    const Mandatory = DateOnAllCalendars.filter(eve => (eve.type === 'mandatory' && !eve.isLecture)).length
    return (
      <section className="eventsCount has-text-weight-bold">
        {Lectures > 0 && <section className="has-text-black">
          Lectures: {Lectures}
        </section>}
        {Mandatory > 0 && <section className="has-text-danger">
          Mandatory Events: {Mandatory}
        </section>}
        {Optional > 0 && <section className="has-text-link">
          Optional Events: {Optional}
        </section>}
      </section>
    )
  }
}

export default withAuthorization(authCondition)(Calendar);

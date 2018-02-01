import React from 'react';
import Moment from "moment";
import PT from "prop-types";


const LecNotes = (props) => (
  <section className='column is-two-thirds isDark'>
    <section className="lectureHeader title has-text-white">
      {props.lecture && props.lectureTitle}<span className="is-pulled-right subtitle has-text-white">
        {Moment(props.lecture && props.lectureEventDate).format("dddd Do MMMM YYYY")}
      </span>
      <section className="subtitle is-size-6 has-text-danger">{props.lecture && props.lectureAuthor}</section>
    </section>

    <section className="lectureNotes box">
      <code className="js customScroll">{props.lecture && props.lectureBody}</code>
    </section>
  </section>
)

LecNotes.propTypes = {
  lecture: PT.object,
  lectureTitle: PT.string,
  lectureEventDate: PT.string,
  lectureAuthor: PT.string,
  lectureBody: PT.string
};

export default LecNotes;
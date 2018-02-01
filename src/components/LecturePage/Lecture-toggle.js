import React from 'react'
import PT from "prop-types";

const LectureToggle = (props) => (
  <section className='hero-head'>
    <section className='field is-grouped'>
      <span
        className={`control button is-danger is-size-7 ${props.commentsVisible && 'is-static'}`}
        onClick={() => props.toggleView(true)}>Comments</span>
      <span
        className={`control button is-danger is-size-7 ${!props.commentsVisible && 'is-static'}`}
        onClick={() => props.toggleView(false)}>Resources</span>
    </section>
  </section>
)

LectureToggle.propTypes = {
  commentsVisible: PT.bool,
  toggleView: PT.func
};

export default LectureToggle;
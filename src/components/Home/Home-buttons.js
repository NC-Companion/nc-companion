import React from 'react';
import { Link } from "react-router-dom";

const HomeButtons = (props) => (
  <section className='homeDashButtons'>
    <Link to='/calendar'><a className='button is-size-2 has-text-danger'>
      <i class="fas fa-calendar-alt" aria-hidden="true"></i>
    </a></Link>
    <a target='_blank' href='http://www.github.com' className="button is-size-2 has-text-dark">
      <i class="fab fa-github" aria-hidden="true" />
    </a>
    <a target='_blank' href='http://www.slack.com' className="button is-size-2 has-text-danger">
      <i class="fab fa-slack" aria-hidden="true" />
    </a>
    <a target='_blank' href='http://www.google.co.uk' className="button is-size-2 has-text-dark">
      <i class="fab fa-google" aria-hidden="true" />
    </a>
  </section>
)

export default HomeButtons;
import React from 'react';

class FilterButtons extends React.Component {
  render() {
    return (
      <section id="myBtnContainer">
          <span className="button" onclick="filterselection('all')"> Show All</span>
          <span className="button" onclick="filterselection('events')"> Events</span>
          <span className="button" onclick="filterselection('news')"> News</span>
          <span className="button" onclick="filterselection('other')"> Other</span>
      </section>
    )
  }
}

export default FilterButtons
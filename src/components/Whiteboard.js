import React from 'react'
import './Whiteboard.css';

class Whiteboard extends React.Component {
  render() {
    return (
      <section className="board height100 isDanger">
        <section className="outline height100">
          <section className="boardBody height100 defaultPadding is-size-6">
            <span className="subtitle is-size-4 ttdtHeader">Things to do today</span>
            <ul className="timeLine defaultPadding">
              <li>Go to NorthCoders</li>
              <li>Go to NorthCoders</li>
              <li>Do this</li>
              <li>9:45 - Go to Lecture</li>
              <li>13:00 - lunch</li>
              <li>14:00 - do some work</li>
            </ul>
          </section>
        </section>
      </section>
    )
  }
}

export default Whiteboard;
import React from 'react'
import './Whiteboard.css';

class Whiteboard extends React.Component {
  render() {
    return (
      <section className="board">
        <section className="outline">
          <section className="boardBody">
            <h1 className="subtitle" id="heading">Things to do today</h1>
              <section className="timeLine">
            <p>Go to NorthCoders</p>
            <p>Go to NorthCoders</p>
            <p>Do this</p>
            <p>9:45 - Go to Lecture</p>
            <p>13:00 - lunch</p>
            <p>14:00 - do some work</p>
            </section>
          </section>
        </section>
      </section>
    )
  }
}

export default Whiteboard;
import React from 'react'
import './Whiteboard.css';

class Whiteboard extends React.Component {
  render() {
    return (
      <section className="board height100 isDanger">
        <section className="outline height100">
          <section className="boardBody height100 defaultPadding is-size-4 customScroll">
            <span className="subtitle is-size-3 ttdtHeader">Things to do today</span>
            <ul className="timeLine defaultPadding">
              {this.props.content.map(item => <li>{item.time} - {item.body}</li>)}
            </ul>
          </section>
        </section>
      </section>
    )
  }
}

export default Whiteboard;
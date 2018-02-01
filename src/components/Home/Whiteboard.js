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
              {this.props.content.sort((a, b) => (a.time.split(':')[0] - b.time.split(':')[0])).map(item => <section className="whiteboardBody"><li>{item.time} - <small className="itemTitle">{item.body}</small> </li><br/></section>)}
            </ul>
          </section>
        </section>
      </section>
    )
  }
}

export default Whiteboard;
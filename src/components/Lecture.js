import React from "react";
import Moment from "moment";
import Comments from "./Comments";
import Resources from "./Resources";
import * as commentsQuery from '../firebase/queries/queryEvents';
import * as resourcesQuery from '../firebase/queries/queryResources';

import "./Lecture.css";

const code = `// the array to be sorted
var list = ['Delta', 'alpha', 'CHARLIE', 'bravo'];

// temporary array holds objects with position and sort-value
var mapped = list.map(function(el, i) {
  return { index: i, value: el.toLowerCase() };
})

// sorting the mapped array containing the reduced values
mapped.sort(function(a, b) {
  if (a.value > b.value) {
    return 1;
  }
  if (a.value < b.value) {
    return -1;
  }
  return 0;
});

// container for the resulting order
var result = mapped.map(function(el){
  return list[el.index];
});`

class Lecture extends React.Component {
  state = {
    commentsVisible: true,
    comments: null,
    resources: null
  };

  componentDidMount(){
    //  TODO ID will come in as a prop to this component
    const eventId = '-L3mv8Z_GhIw2rhN7WTQ';
    commentsQuery.lectureData(eventId)
      .then(lectureData => {
        this.setState({
          comments : lectureData
        });
      })
      .catch(console.log);
      resourcesQuery.getEventResources(eventId)
        .then(res => {
          this.setState({
            resources : res
          })
        })
        .catch(console.log);


  }
  render() {
    return (
      <section className="lecture">
        <section className='half section'>
          <section className="lectureHeader title">
            Node.js<span className="is-pulled-right subtitle has-text-danger">
              {Moment().format("dddd Do MMMM YYYY")}
            </span>
            <section className="subtitle is-size-6 has-text-danger">Mauro Gestoso</section>
          </section>

          <section className="lectureBody box">
            <code className="js customScroll">{code}</code>
          </section>

        </section>
        <section className='half'>
          <section className='field is-grouped'>
            <span
              className={`control button is-danger is-size-7 ${this.state.commentsVisible && 'is-static'}`}
              onClick={() => this.toggleView(true)}>Comments</span>
            <span
              className={`control button is-danger is-size-7 ${ !this.state.commentsVisible && 'is-static'}`}
              onClick={() => this.toggleView(false)}>Resources</span>
          </section>
          <section className="columns">
            <section className="lectureFooter column">
              {!this.state.commentsVisible
                ? <section className='noTopBottomPadding customScroll height section'>{this
                      .state
                      .resources
                      .map((resource, i) => (<Resources key={i} resource={resource}/>))}</section>
                : <section className='customScroll height'>
                  <section className='container'>
                    <form className='field is-grouped'>
                      <section className='control is-expanded'><textarea className='input' placeholder='write a comment...'/></section>
                      <button className='control button is-pulled-right is-danger' type='submit'>Post comment</button>
                    </form>
                  </section>
                  <section className='section'>
                    {this.state.comments &&
                      this.state
                      .comments 
                      .map((comment, i) => (<Comments key={i} comment={comment}/>))}
                  </section>
                </section>}
            </section>
          </section>
        </section>
      </section>
    );
  }

  toggleView = bool => {
    if (this.state.commentsVisible !== bool) {
      this.setState({commentsVisible: bool})
    }
  }
}

export default Lecture;

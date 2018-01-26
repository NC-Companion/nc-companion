import React from "react";
import Moment from "moment";
import Comments from "./Comments";
import Resources from "./Resources";

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
    comments: [
      {
        user: {
          name: "Mike Buzzington",
          handle: "mikeBuzzBoy",
          imageUrl: "https://vignette.wikia.nocookie.net/simpsons/images/c/c5/Homer_simpsonwoohooo.gi" +
              "f/revision/latest?cb=20131119164522"
        },
        comment: {
          body: code,
          createdAt: Moment().format("DDMMYYYY"),
          votes: 200
        }
      }, {
        user: {
          name: "Buz Mikeingthon",
          handle: "BuzzGirl",
          imageUrl: "http://31.media.tumblr.com/27d60c20e6918b2d1dd9a209df8e8370/tumblr_mzm6n0g0j31r6" +
              "tn9jo1_500.gif"
        },
        comment: {
          body: "Piss off Mike!",
          createdAt: Moment().format("DDMMYYYY"),
          votes: 90
        }
      }, {
        user: {
          name: "Mike Buzzington",
          handle: "mikeBuzzBoy",
          imageUrl: "https://vignette.wikia.nocookie.net/simpsons/images/c/c5/Homer_simpsonwoohooo.gi" +
              "f/revision/latest?cb=20131119164522"
        },
        comment: {
          body: code,
          createdAt: Moment().format("DDMMYYYY"),
          votes: 200
        }
      }, {
        user: {
          name: "Mike Buzzington",
          handle: "mikeBuzzBoy",
          imageUrl: "https://vignette.wikia.nocookie.net/simpsons/images/c/c5/Homer_simpsonwoohooo.gi" +
              "f/revision/latest?cb=20131119164522"
        },
        comment: {
          body: code,
          createdAt: Moment().format("DDMMYYYY"),
          votes: 200
        }
      }, {
        user: {
          name: "Mike Buzzington",
          handle: "mikeBuzzBoy",
          imageUrl: "https://vignette.wikia.nocookie.net/simpsons/images/c/c5/Homer_simpsonwoohooo.gi" +
              "f/revision/latest?cb=20131119164522"
        },
        comment: {
          body: code,
          createdAt: Moment().format("DDMMYYYY"),
          votes: 200
        }
      }, {
        user: {
          name: "Mike Buzzington",
          handle: "mikeBuzzBoy",
          imageUrl: "https://vignette.wikia.nocookie.net/simpsons/images/c/c5/Homer_simpsonwoohooo.gi" +
              "f/revision/latest?cb=20131119164522"
        },
        comment: {
          body: code,
          createdAt: Moment().format("DDMMYYYY"),
          votes: 200
        }
      }
    ],
    resources: [
      {
        title: 'Space',
        body: 'The saturn is bigger than uranus.',
        link: 'http://www.google.com'
      }, {
        title: 'Bikes',
        body: 'Are bikes not just the best.',
        link: 'http://www.google.com'
      }, {
        title: 'Shoes',
        body: 'Wear shoes, they taste nice.',
        link: 'http://www.google.com'
      }, {
        title: 'Fire',
        body: 'You can\'t digest fire, I tried.',
        link: 'http://www.google.com'
      }, {
        title: 'Eviction',
        body: 'Only nice people get evicted and buy new cars in disney land.',
        link: 'http://www.google.com'
      }, {
        title: 'Shoes',
        body: 'Wear shoes, they taste nice.',
        link: 'http://www.google.com'
      }, {
        title: 'Fire',
        body: 'You can\'t digest fire, I tried.',
        link: 'http://www.google.com'
      }, {
        title: 'Eviction',
        body: 'Only nice people get evicted and buy new cars in disney land.',
        link: 'http://www.google.com'
      }
    ]
  };
  s;
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
                    {this
                      .state
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

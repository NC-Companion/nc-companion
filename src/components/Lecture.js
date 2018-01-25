import React from "react";
import Moment from "moment";
import Highlight from "react-highlight";
import Comments from "./Comments";
import Resources from "./Resources";

import "./Lecture.css";

class Lecture extends React.Component {
  state = {
    comments: [
      {
        user: {
          name: "Mike Buzzington",
          handle: "mikeBuzzBoy",
          imageUrl:
            "https://vignette.wikia.nocookie.net/simpsons/images/c/c5/Homer_simpsonwoohooo.gif/revision/latest?cb=20131119164522"
        },
        comment: {
          body: "Hello Buzz 2",
          createdAt: Moment().format("DDMMYYYY"),
          votes: 20
        }
      },
      {
        user: {
          name: "Buz Mikeingthon",
          handle: "BuzzGirl",
          imageUrl:
            "http://31.media.tumblr.com/27d60c20e6918b2d1dd9a209df8e8370/tumblr_mzm6n0g0j31r6tn9jo1_500.gif"
        },
        comment: {
          body: "Piss off Mike!",
          createdAt: Moment().format("DDMMYYYY"),
          votes: 90
        }
      }
    ]
  };
  s;
  render() {
    return (
      <section className="lecture section">
        <section className="title">
          Node.js<span className="is-pulled-right subtitle has-text-danger">
            {Moment().format("dddd Do MMMM YYYY")}
          </span>
        </section>
        <section />
        <section className="subtitle">Mauro Gestoso</section>
        <section className="box">
          <code className="js">{` function add(a, b){
                    return a + b
                }`}</code>
        </section>

        <section className="columns">
          <section className="comments column">
            {this.state.comments.map((comment, i) => (
              <Comments key={i} comment={comment} />
            ))}
          </section>
          <section className="resources column">
            {this.state.comments.map((comment, i) => (
              <Resources key={i} resource={comment} />
            ))}
          </section>
        </section>
      </section>
    );
  }
}

export default Lecture;

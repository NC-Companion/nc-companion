import React from "react";
import Moment from "moment";
import LecNotes from './Lecture-notes';
import LectureToggle from './Lecture-toggle';
import Comments from "./Comments";
import Resources from "./Resources";
import PostComments from "./Post-comments";
import * as commentsQuery from '../../firebase/queries/queryEvents';
import * as resourcesQuery from '../../firebase/queries/queryResources';
import withAuthorization, {authCondition} from "../auth/withAuthorization";
import * as CommentRef from '../../firebase/refs/commentsRef';
import PT from "prop-types";
import "./Lecture.css";
import { lecture } from "../../constants/routes";
import LectureNotes from "./Lecture-notes";

class Lecture extends React.Component {
  state = {
    commentsVisible: true,
    comments: null,
    resources: null,
    eventId: window.location.href.split('/').pop(),
    lecture: null
  };

  componentDidMount() {
    this.fetchComments()
  }

  render() {
    return (
      <section className="lecture columns isWhite">
        {this.state.lecture && <LecNotes lecture={this.state.lecture} lectureTitle={this.state.lecture.title} lectureEventDate={this.state.lecture.eventDate} lectureAuthor={this.state.lecture.author} lectureBody={this.state.lecture.body} />}
        
        <section className='hero column is-one-third isWhite lectureRightPane'>
          <LectureToggle commentsVisible={this.state.commentsVisible} toggleView={this.toggleView} />

            <section className='hero-body lectureRightBody isWhite customScroll'>
              <section className="">
                <section className="">
                  {!this.state.commentsVisible
                    ? <section className=''>{this
                          .state
                          .resources
                          .map((resource, i) => (<Resources key={i} resource={resource}/>))}</section>
                    : <section className=''>
                      <section className='commentInput'>
                        <PostComments
                          fetchComments={this.fetchComments}
                          eventId={this.state.eventId}
                          userId={this.props.authUser.uid}/>
                      </section>
                      <section className=''>
                        {this.state.comments && this
                          .state
                          .comments
                          .sort((a, b) => (new Date(b.comment.creationDate) - new Date(a.comment.creationDate)))
                          .map((comment, i) => (<Comments
                            deleteUserComment={this.deleteUserComment}
                            key={i}
                            index={i}
                            ownComment={this.props.authUser.displayName === comment.user.name}
                            comment={comment}
                            authUser={this.props.authUser}/>))}
                      </section>
                    </section>}
                </section>
              </section>
            </section>
          </section>
      </section>
    );
  }

  fetchComments = () => {
    commentsQuery
      .listenForLectureData(this.state.eventId, (err, comments) => {
        if (err) return console.log(err);
        this.setState({comments})
      })
      
    commentsQuery
      .getEventById(this.state.eventId)
      .then(lecture => this.setState({lecture: lecture.val()}))
    resourcesQuery
      .getEventResources(this.state.eventId)
      .then(res => {
        this.setState({resources: res})
      })
      .catch(console.log);
  }

  deleteUserComment = (commentIndex) => {
    if (this.state.comments[commentIndex].user.id === this.props.authUser.uid) {
      CommentRef
        .deleteComment(this.state.comments[commentIndex].comment.id, this.props.authUser.uid)
        .then(res => {
          this.setState({
            comments: this
              .state
              .comments
              .filter((comment, i) => i !== commentIndex)
          })
        })
        .catch(console.log)
    }
  }

  toggleView = bool => {
    if (this.state.commentsVisible !== bool) {
      this.setState({commentsVisible: bool})
    }
  }
}

Lecture.propTypes = {
  authUser: PT.object
};

export default withAuthorization(authCondition)(Lecture);

import React from "react";
import PT from "prop-types";
import { Link } from "react-router-dom";

import { auth } from "../firebase";

import { db } from '../firebase/firebase';


const LandingPage = ({ history }) => {
  return (
    <div>
      <h1>Landing Page</h1>
      <GitHubSignIn history={history} />
      <Link to="/admin-sign-in">Sign In as admin</Link>
    </div>
  );
};

const queryAllComments = () => {
  db.ref('/comments').on('value', res => {
    console.log(res.val());
  });
};

const queryCommentsByEventId = (id) => {
  db.ref('/comments').orderByChild('eventId').equalTo(id).on('value', res => {
    console.log(res.val());
  });
};

const queryAllEvents = () => {
  db.ref('/events').on('value', res => {
    console.log(res.val());
  })
}

const allUsers = () => {
  db.ref('/users').on('value', res => {
    console.log(res.val())
  })
}


const queryEventsByUserId = (id) => {
  db.ref('/events').orderByChild('authorUid').equalTo(id).on('value', res => {
    console.log(res.val())
  })
}

//McKenzie ,Tomas
const allLecturesPerAuthor = (name) => {
  db.ref('/users').orderByChild('name').equalTo(name).on('value', res => {
    let userId = (Object.keys(res.val())).join('');
    queryEventsByUserId(userId)
  })
}


LandingPage.propTypes = {
  history: PT.shape({
    push: PT.func.isRequired
  })
};

class GitHubSignIn extends React.Component {
  signIn = () => {
    auth.signInWithGitHub().then(() => {
      this.props.history.push("/account");
    });
  };


  componentDidMount() {
    // allUsers();
    allLecturesPerAuthor('McKenzie ,Tomas');
    // allLecturesPerAuthor('Kuhlman ,Haven');
    // allLecturesPerAuthor('Reinger ,Dion')

  }

  render() {
    return (
      <div>
        <button onClick={this.signIn}>Sign In with GitHub</button>;
    <button onClick={this.queryAllComments}>Get comments</button>;
    </div>
    )
  }
}

export default LandingPage;

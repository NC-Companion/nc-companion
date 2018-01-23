import React from "react";
import {auth, firebase} from '../firebase'

class App extends React.Component {
  state = {
    loading: true,
    authUser: null,
  }
  componentDidMount() {
    firebase.auth.onAuthStateChanged(authUser => {
      authUser 
        ? this.setState({authUser, loading: false})
        : this.setState({authUser: null, loading: false})

    })
  }
  handleSubmit (event) {
    event.preventDefault();
    const email = event.target.elements.email.value
    const password = event.target.elements.password.value
    auth.signInWithEmailAndPassword(email, password)

  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input name='email' type='email' />
        <input name='password' type='password' />
        <button type='submit'>Sign In!</button>
      </form>
    );
  }
}

export default App;

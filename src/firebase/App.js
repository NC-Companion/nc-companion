import React from "react";
import faker from 'faker';
import {auth, firebase, queries} from './firebase'

class App extends React.Component {
  state = {
    loading: true,
    authUser: null
  }
  componentDidMount() {
    queries.getAllEvents((err,res) => {
    })
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
  generateRandomData () {
    for(let i = 0; i < 10;i++) {
      const data = {
        title:faker.fake("{{hacker.phrase}}"),
        body:faker.fake("{{lorem.paragraphs}}"),
        author:faker.fake("{{name.lastName}} ,{{name.firstName}}"),
        tags : [faker.fake("{{random.words}}"),faker.fake("{{random.words}}"),faker.fake("{{random.words}}")],
        catagory: faker.fake("{{random.word}}"),
        img_url : faker.fake("{{random.image}}")
      }
      queries.postNewEvent(data, (err)=>{
        console.log(err);
      })      
    }
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input name='email' type='email' />
          <input name='password' type='password' />
          <button type='submit'>Sign In!</button>
        </form>
        <button onClick={this.generateRandomData}>
          Generate Fake Events 
        </button>
      </div>
    );
  }
}

export default App;

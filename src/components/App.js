import React from "react";
import Header from "./Header";
import Calendar from "./Calendar";
import NewsStories from "./NewsStories";
import CreateNews from "./CreateNews";

class App extends React.Component {
  render() {
    return (
      <section className="main">
        {/* <Header /> */}
        {/* <NewsStories /> */}
        {/* <Calendar /> */}
        <CreateNews />
      </section>
    );
  }
}

export default App;

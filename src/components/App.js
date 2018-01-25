import React from "react";
import Header from "./Header";
import Calendar from "./Calendar";
import NewsStories from "./NewsStories";

class App extends React.Component {
  render() {
    return (
      <section className="main">
        {/* <Header /> */}
        {/* <NewsStories /> */}
        <Calendar />
      </section>
    );
  }
}

export default App;

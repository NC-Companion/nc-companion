import React from "react";
import Header from "./Header";
import NewsStories from "./NewsStories";

class App extends React.Component {
  render() {
    return (
      <section className="main">
        <Header />
        <NewsStories />
      </section>
    );
  }
}

export default App;

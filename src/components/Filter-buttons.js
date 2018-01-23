import React from "react";

class FilterButtons extends React.Component {
  render() {
    return (
      <section id="myBtnContainer">
        <span className="button" onClick={() => {}}>
          {" "}
          Show All
        </span>
        <span className="button" onClick={() => {}}>
          {" "}
          Events
        </span>
        <span className="button" onClick={() => {}}>
          {" "}
          News
        </span>
        <span className="button" onClick={() => {}}>
          {" "}
          Other
        </span>
      </section>
    );
  }
}

export default FilterButtons;

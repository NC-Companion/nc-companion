import React from 'react';
import PT from "prop-types";

const Quotes = (props) => (
  <span className="content">
    <blockquote className="subtitle">
      <span className="is-size-5 is-italic">{`"${props.quote.body}"`}</span>
      <span className="is-size-4 has-text-weight-bold has-text-danger">{` - ${props.quote.author}`}</span>
    </blockquote>
  </span>
)

Quotes.propTypes = {
quote: PT.object
};

export default Quotes
import React from 'react'
import PT from "prop-types";

const NewsSearch = ({ handleChange }) => (
  <section className="inputField">
    <input className="input" type="text" placeholder="Search news..." onChange={handleChange} />
  </section>
)

NewsSearch.propTypes = {
  handleChange: PT.func.isRequired,
};

export default NewsSearch;
import React from 'react'
import PT from "prop-types";

const NewsSearch = ({handleChange}) => (
  <section className="inputField section">
    <section class="field has-addons">
      <p class="control is-expanded">
        <input
          className="input"
          type="text"
          placeholder="Search news..."
          onChange={handleChange}/>
      </p>
      <p class="control">
        <span class="select">
          <select>
            <option>Show All</option>
            <option>Events</option>
            <option>News</option>
            <option>Other</option>
          </select>
        </span>
      </p>
    </section>
  </section>
)

NewsSearch.propTypes = {
  handleChange: PT.func.isRequired
};

export default NewsSearch;
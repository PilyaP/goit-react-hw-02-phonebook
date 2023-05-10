import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FormFilter } from './SearchFilter.styled';

export default class SearchFilter extends Component {
  render() {
    return (
      <FormFilter>
        <h2 className="filter-title">{this.props.title}</h2>
        <div className="find-filter">
          <label className="filter-label">Find contacts by name</label>
          <input
            className="filter-input"
            type="text"
            name="name"
            onChange={this.props.onChange}
          />
        </div>
      </FormFilter>
    );
  }
}

SearchFilter.propTypes = {
  title: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

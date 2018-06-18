/*
* Npm import
*/
import React from 'react';
import PropTypes from 'prop-types';
/*
* local import
*/

/*
* Code
*/
const Header = ({ categories }) => (
  <header id="header">
    {categories.map(category => (
      <a key={category} className="header-category">{category}</a>
    ))}
  </header>
);
Header.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
};
/*
* Export
*/
export default Header;

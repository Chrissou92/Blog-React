/*
* Npm import
*/
import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
/*
* local import
*/
import Blog from 'src/components/Blog';

/*
* Code
*/

/*
* Export
*/
document.addEventListener('DOMContentLoaded', () => {
  const node = document.getElementById('root');
  render(<Blog />, node);
});

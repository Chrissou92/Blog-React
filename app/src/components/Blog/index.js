/*
* Npm import
*/
import React, { Fragment } from 'react';
/*
* local import
*/
import Header from 'src/components/Header';
import Posts from 'src/components/Posts';
import Footer from 'src/components/Footer';
/*
* Code
*/
const Blog = () => (
  <Fragment>
    <Header />
    <Posts />
    <Footer />
  </Fragment>
);
/*
* Export
*/
export default Blog;

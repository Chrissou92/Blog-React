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

// Datas
import categories from 'src/datas/categories';
/*
* Code
*/
const Blog = () => (
  <Fragment>
    <Header categories={categories} />
    <Posts />
    <Footer />
  </Fragment>
);
/*
* Export
*/
export default Blog;

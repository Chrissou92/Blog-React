/*
* Npm import
*/
import React from 'react';

/*
* local import
*/
import Header from 'src/components/Header';
import Posts from 'src/components/Posts';
import Footer from 'src/components/Footer';

// Datas
import categories from 'src/datas/categories';
import posts from 'src/datas/posts';
/*
* Code
*/


class Blog extends React.Component {
  /*
  * state initial
   */
  state = {
    selectedCategory: 'Front',
  }
  /*
  * Action
  */
  handleClick =() => {
    this.setState({
      selectedCategory: 'React',
    });
  }
  /*
  * Render
   */
  render() {
    const selectedPosts = posts.filter(post => (
      post.category === this.state.selectedCategory
    ));
    return (
      <div id="blog" onClick={this.handleClick}>
        <Header categories={categories} />
        <Posts posts={selectedPosts} />
        <Footer />
      </div>
    );
  }
}

/*
* Export
*/
export default Blog;

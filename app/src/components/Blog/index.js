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
    selectedCategory: 'Accueil',
  }
  /*
  * Action
  */
  handleClick = selectedCategory => () => {
    this.setState({ selectedCategory });
  }
  /*
  * Render
   */
  render() {
    const { selectedCategory } = this.state;

    const selectedPosts = posts.filter(post => (
      post.category === selectedCategory
      ||
      selectedCategory === 'Accueil'
    ));

    return (
      <div id="blog">
        <Header
          categories={categories}
          onCategoryClick={this.handleClick}
        />
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

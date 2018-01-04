import React from 'react';
import NewsComponent from './NewsComponent';
import Header from './Header';
import { connect } from 'react-redux';
import styles from '../styles/NewsListStyles.css';

const NewsList = ({news}) => (
  <div>
    <Header showArrow="false" width="100%"/>
    <div className={styles.grid_model}>
    {
      news.map(d =>
        <NewsComponent
          key = { d.id }
          id = { d.id }
          title = { d.title }
          liked = { d.liked }
          disliked = { d.disliked }
          bookmarked = { d.bookmarked }
          description = { d.description }
          imageUrl = { d.imageUrl } />
        )
      }
      </div>
    </div>
)

const mapStateToProps = (state) => {
  return {
      news: state
  }
}


export default connect(
  mapStateToProps
)(NewsList)

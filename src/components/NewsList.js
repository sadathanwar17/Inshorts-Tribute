import React from 'react';
import NewsComponent from './NewsComponent';
import Header from './Header';
import { connect } from 'react-redux';

const NewsList = ({news}) => (
  <div>
    <Header showArrow="false" width="100%"/>
    <ul>
    {
      news.map(d =>
        <NewsComponent
          key = { d.id }
          id = { d.id }
          title = { d.title }
          liked = { d.liked }
          disliked = { d.disliked }
          bookmark = { d.bookmarked }
          description = { d.description }
          imageUrl = { d.imageUrl } />
        )
      }
      </ul>
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

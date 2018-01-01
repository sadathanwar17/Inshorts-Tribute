import React from 'react';
import { connect } from 'react-redux';
import styles from '../styles/BtnsStyles.css';
import { like, dislike, bookmark, removeBookmark } from '../actions/index';

let Btns = (props) => (
  <div className={styles.mainDiv}>
    {
      (!props.state.liked) ?
        <button
          onClick={() =>
            props.dispatch(like(props.state.id))}
          className={styles.buttonStyling}>
          Like
        </button>
      :
      <button disabled className={styles.buttonStyling}>Like</button>
    }
    {
      (!props.state.disliked) ?
        <button
          onClick={() =>
            props.dispatch(dislike(props.state.id))}
          className={styles.buttonStyling}>
          Dislike
        </button>
      :
        <button disabled className={styles.buttonStyling}>Dislike</button>
      }
      {
        (!props.state.bookmarked) ?
          <button
            onClick={() =>
              props.dispatch(bookmark(props.state.id))}
            className={styles.buttonStyling}>
            Bookmark
          </button>
        :
          <button
            onClick={() =>
              props.dispatch(removeBookmark(props.state.id))}
            className={styles.buttonStyling}>
            Remove Bookmark
          </button>
        }
  </div>
)

Btns = connect()(Btns)
export default Btns

import React from 'react';
import styles from '../styles/BtnsStyles.css';

const Btns = (props) => (
  <div className={styles.mainDiv}>
    {
      (!props.state.liked) ?
        <button onClick={() => store.dispatch({
          type: 'LIKE',
          id: props.state.id
        })} className={styles.buttonStyling}>Like</button>
      :
      <button disabled className={styles.buttonStyling}>Like</button>
    }
    {
      (!props.state.disliked) ?
        <button onClick={() => store.dispatch({
          type: 'DISLIKE',
          id: props.state.id
        })} className={styles.buttonStyling}>Dislike</button>
      :
        <button disabled className={styles.buttonStyling}>Dislike</button>
      }
      {
        (!props.state.bookmarked) ?
          <button onClick={() => store.dispatch({
            type: 'BOOKMARK',
            id: props.state.id
          })} className={styles.buttonStyling}>Bookmark</button>
        :
          <button onClick={() => store.dispatch({
            type: 'REMOVE BOOKMARK',
            id: props.state.id
          })} className={styles.buttonStyling}>Remove Bookmark</button>
        }
  </div>
)

export default Btns

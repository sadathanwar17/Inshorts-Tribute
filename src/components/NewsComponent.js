import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from '../styles/NewsComponentStyle.css';

class NewsComponent extends React.Component {
  constructor(props) {
    super(props);
    var description;
    if(this.props.description.length > 256) {
      var ending = " ...";
      this.description = this.props.description.substring(0, 256 - ending.length) + ending;
    }
    else {
      this.description = this.props.description;
    }
    this.imageUrl = this.props.imageUrl + "400px";
  }

  render() {
    return (
      <div className={styles.display_horizontal}>
        <NavLink to={"/" + this.props.id} activeClassName={styles.disableDecoration} className={styles.disableDecoration}>
          <div className={styles.div_padding}>
            <img src={ this.imageUrl } width="350px" height="250px" className={styles.image_styles}/>
          </div>
        </NavLink>
        <div className={styles.display_vertical}>
          <NavLink to={"/" + this.props.id} activeClassName={styles.disableDecoration} className={styles.disableDecoration}>
            <h4> { this.props.title } </h4>
            <p> { this.description } </p>
            </NavLink>
            <div className={styles.display_vertical}>
              <div className={styles.btnStyling}>
                {
                  (!this.props.liked) ?
                    <button onClick={() => store.dispatch({
                    type: 'LIKE',
                    id: this.props.id
                  })} className={styles.buttonSpacing}>Like</button>
                :
                <button className={styles.disabled} disabled>Like</button>
              }
              {
                (!this.props.disliked) ?
                  <button onClick={() => store.dispatch({
                    type: 'DISLIKE',
                    id: this.props.id
                  })} className={styles.buttonSpacing}>Dislike</button>
                :
                  <button className={styles.disabled} disabled>Dislike</button>
                }
                {
                  (!this.props.bookmark) ?
                    <button onClick={() => store.dispatch({
                      type: 'BOOKMARK',
                      id: this.props.id
                    })} className={styles.buttonSpacing}>Bookmark</button>
                  :
                    <button onClick={() => store.dispatch({
                      type: 'REMOVE BOOKMARK',
                      id: this.props.id
                    })} className={styles.bookmarkStyle}>Remove Bookmark</button>
                  }
              </div>
          </div>
        </div>
      </div>
    )
  }
}

export default NewsComponent

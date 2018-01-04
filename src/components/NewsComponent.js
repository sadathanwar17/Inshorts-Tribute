import React from 'react';
import { NavLink } from 'react-router-dom';
import Btns from '../container/Btns';
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
        <h4 className={styles.heading}> { this.props.title } </h4>
        <NavLink to={"/" + this.props.id} activeClassName={styles.disableDecoration} className={styles.disableDecoration}>
          <div className={styles.div_padding}>
            <img src={ this.imageUrl } width="350px" height="250px" className={styles.image_styles}/>
          </div>
        </NavLink>
        <div className={styles.display_vertical}>
          <NavLink to={"/" + this.props.id} activeClassName={styles.disableDecoration} className={styles.disableDecoration}>
            <p> { this.description } </p>
            </NavLink>
            <div className={styles.display_vertical}>
              <Btns state={this.props} />
            </div>
        </div>
      </div>
    )
  }
}

export default NewsComponent

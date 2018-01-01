import React from 'react';
import { connect } from 'react-redux';
import Header from './Header';
import Btns from '../container/Btns';
import styles from '../styles/NewsDetailStyles.css';

const NewsDetail = ({ match, data }) => {
  let state = data[match.params.newsId]
  var imageUrl = state.imageUrl + "540px";
  return (
    <div>
      <Header showArrow="true" width="94%"/>
      <div className={styles.divPadding}>
        <h1 className={styles.h1Style}>{ state.title }</h1>
        <div className={styles.btnDivStyle}>
          <h4 className={styles.authorStyle}>By: { state.author }</h4>
          <Btns state={state} />
        </div>
        <div className={styles.divPad}>
          <img src={imageUrl} className={styles.imgStyle} />
          <p className={styles.descriptionStyle}> { state.description } </p>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
      data: state
  }
}

export default connect(
  mapStateToProps
)(NewsDetail)

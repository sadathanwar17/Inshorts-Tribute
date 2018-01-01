import React from 'react';
import styles from '../styles/HeaderStyles.css';
import { NavLink } from 'react-router-dom';

const disableDecoration = {
  textDecoration: "none",
  color: "#000000"
}

const Header = ({showArrow, width}) => (
  <div className={styles.MainDiv}>
    {
      showArrow==="true" ?
        <NavLink to="/" activeStyle={disableDecoration}>
          <i className="fa fa-arrow-left fa-3x arrowStyle" aria-hidden="true"></i>
        </NavLink>
      : null
    }
    <h1 style={{
      display: "inline-block",
      textAlign: "center",
      width: width
    }}>INSHORTS TRIBUTE</h1>
  </div>
)
export default Header

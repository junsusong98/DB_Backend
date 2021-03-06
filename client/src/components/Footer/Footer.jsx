import React from 'react';
import classes from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <div className="center">
        <p className={classes.copyright}>
          COPYRIGHT &copy; CEO CINEMA ALL RIGHT RESERVED
        </p>
      </div>
    </footer>
  );
};

export default Footer;

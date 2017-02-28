/**
 * Created by brook on 2017/2/26.
 */
import React from 'react';

import classStyle from './style.css';


const LeftCop = ({
  text,
  link,
  status,
  onClick,
}) => (
  <div
    className={status ? classStyle.filterImageCheck : classStyle.filterImage}
    onClick={onClick}
  >
    <img
      alt="example"
      src={link}
      style={{ height: '80px' }}
    />
    <hr color="#ecf6fd" height="1px" />
    <h5>{text}</h5>
  </div>
);

LeftCop.propTypes = {
  text: React.PropTypes.string,
  link: React.PropTypes.string,
  status: React.PropTypes.bool,
  onClick: React.PropTypes.func,
};

export default LeftCop;

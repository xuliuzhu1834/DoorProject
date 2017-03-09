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
    className={status ? classStyle.doorImageChenck : classStyle.doorImage}
    onClick={onClick}
  >
    <img
      alt="example"
      src={link}
      className={classStyle.imageHeight}
    />
    <hr color="#ecf6fd" height="2px" />
    <h5 style={{ marginTop: '3px' }}>{text}</h5>
  </div>
);

LeftCop.propTypes = {
  text: React.PropTypes.string,
  link: React.PropTypes.string,
  status: React.PropTypes.bool,
  onClick: React.PropTypes.func,
};

export default LeftCop;

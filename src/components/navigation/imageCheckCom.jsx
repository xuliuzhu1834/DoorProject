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
    <h5 style={{ marginTop: '3px', color: '#999' }}>{text}</h5>
  </div>
);

LeftCop.propTypes = {
  text: React.PropTypes.string,
  link: React.PropTypes.string,
  status: React.PropTypes.bool,
  onClick: React.PropTypes.func,
};

export default LeftCop;

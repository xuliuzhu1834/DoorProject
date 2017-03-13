/**
 * Created by brook on 2017/2/27.
 */
import React, { PropTypes } from 'react';
import assign from 'object-assign';
import Doors from './imageCheckCom';
import { commit } from './action';
import styles from './style.css';

const textStyle = {
  position: 'relative',
  bottom: '10px',
  left: '8px',
  fontSize: '14px',
  fontWeight: 200,
};

const doorsImages = require.context('./images/doors');
const LeftPart = ({
  expandable,
  dispatch,
  cates,
}) => (
  <div
    className={styles.chooseDoor}
    style={{ maxHeight: '830px', flex: expandable === 'expand' ? 3 : 0 }}
  >
    <div className={styles.doorHeader} style={{ visibility: expandable === 'expand' ? 'visible' : 'hidden' }}>
      <img
        alt="icon" src={doorsImages('./icon.png')}
        style={{ width: '15px', height: '29px' }}
      />
      <span style={textStyle}>门款选择</span>
    </div>
    <div style={{ overflow: 'auto', width: '100%' }}>
      {
        cates ? cates.map((v, i) => (
          <Doors
            key={i}
            link={v.value}
            text={v.name}
            status={v.status}
            onClick={() => {
              dispatch((commit(
                'cates',
                [
                  ...cates.slice(0, i).map(item => assign({}, item, { status: false })),
                  assign({}, v, { status: true }),
                  ...cates.slice(i + 1).map(item => assign({}, item, { status: false })),
                ],
              )));
              return dispatch({ type: 'nav_filter', id: v.id });
            }}
          />
        )) : null
      }
    </div>
  </div>
);
LeftPart.propTypes = {
  /* eslint react/forbid-prop-types:0 */
  dispatch: PropTypes.func,
  cates: PropTypes.array,
  expandable: PropTypes.string,
};

export default LeftPart;

/**
 * Created by brook on 2017/2/27.
 */
import React, { PropTypes } from 'react';
import assign from 'object-assign';
import Doors from './imageCheckCom';
import { commit } from './action';
import styles from './style.css';

const doorsImages = require.context('./images/doors');
const LeftPart = ({
  dispatch,
  defaultdoorSource,
  doorSource,
}) => (
  <div style={{ maxHeight: '600px' }} className={styles.chooseDoor}>
    <div className={styles.doorHeader}> 门款选择 </div>
    <div style={{ overflow: 'auto', width: '100%' }}>
      {
        doorSource.map((v, i) => (
          <Doors
            key={i}
            link={doorsImages(`./${v.link}`)}
            text={v.text}
            status={v.status}
            onClick={() => dispatch(
              commit(
                'doorSource',
                [
                  ...defaultdoorSource.slice(0, i),
                  assign({}, v, { status: !v.status }),
                  ...defaultdoorSource.slice(i + 1),
                ],
              ),
            )}
          />
        ))
      }
      {
        new Array(8).fill(0).map((v, i) => (
          <Doors
            key={i}
            link={doorsImages('./门1.png')}
            text={'Model static'}
            status={false}
          />
        ))
      }
    </div>
  </div>
);
LeftPart.propTypes = {
  /* eslint react/forbid-prop-types:0 */
  dispatch: PropTypes.func,
  doorSource: PropTypes.array,
  defaultdoorSource: PropTypes.array,
};

export default LeftPart;

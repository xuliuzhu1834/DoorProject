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
  doorSource,
  cates,
}) => (
  <div style={{ maxHeight: '830px' }} className={styles.chooseDoor}>
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
                  ...doorSource.slice(0, i)
                    .map(item => assign({}, item, { status: false })),
                  assign({}, v, { status: true }),
                  ...doorSource.slice(i + 1)
                    .map(item => assign({}, item, { status: false })),
                ],
              ),
            )
              .then(dispatch({ type: 'nav_filter', id: 1 }))
            }
          />
        ))
      }
      {
        console.log(cates)
      }
      {
        cates ? cates.map((v, i) => (
          <Doors
            key={i}
            link={v.path}
            text={v.name}
            status={v.status}
          />
        )) : null
      }
    </div>
  </div>
);
LeftPart.propTypes = {
  /* eslint react/forbid-prop-types:0 */
  dispatch: PropTypes.func,
  doorSource: PropTypes.array,
  cates: PropTypes.array,
};

export default LeftPart;

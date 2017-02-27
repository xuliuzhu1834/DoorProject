import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import assign from 'object-assign';
import LeftPart from './leftPart';
import Filters from './filters';
import styles from './style.css';

const bgImages = require.context('./images/bg');

const bg = {
  a: { backgroundColor: '#ccc' },
  b: { backgroundColor: '#ebf8f2' },
  c: { backgroundColor: '#0e77ca' },
  d: { backgroundColor: '#cfefdf' },
};

class Navigation extends Component {
  constructor(props) {
    super(props);
    props.dispatch({ type: 'nav_init' });
  }
  render() {
    return (
      <div className={styles.antLayoutBody}>
        {/* 头部 */}
        <div className={styles.antLayoutTop} >
          my company name
        </div>
        {/* 主体部分 */}
        <div className={styles.antLayoutContent}>
          {/* 选择门 */}
          <LeftPart {...this.props} />
          <div className={styles.mainShow}>
            {/* 显示结果 */}
            <div className={styles.showEvery} height="600px">
              <img alt="wall" src={bgImages('./墙1.png')} style={{ height: '600px' }} />
            </div>
            {/* 条件 */}
            <div className={styles.filters}>
              <Filters {...this.props} />
            </div>
          </div>
        </div>
        {/* 底部 */}
        <div className={styles.bottom}>
          <p>这是底部</p>
        </div>
      </div>
    );
  }
}
Navigation.propTypes = {
  dispatch: PropTypes.func,
};

const mapStateToProps = state => state.navigation;

export default connect(mapStateToProps)(Navigation);

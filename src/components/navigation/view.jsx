import React from 'react';
import { connect } from 'react-redux';
import styles from './style.css';

const bg = {
  a: { backgroundColor: '#ccc' },
  b: { backgroundColor: '#ebf8f2' },
  c: { backgroundColor: '#0e77ca' },
  d: { backgroundColor: '#cfefdf' },
};

class Navigation extends React.Component {
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
          <div style={bg.b} className={styles.chooseDoor}>
            <p>这里是门</p>
          </div>
          {/* 显示区域 */}
          <div style={bg.b} className={styles.mainShow}>
            <div style={bg.c} className={styles.showEvery}>
              <p>这里是显示区域</p>
            </div>
            <div style={bg.d} className={styles.filters}>
              <p>这里是选择条件</p>
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
  /* eslint  react/forbid-prop-types: 0 */
  dispatch: React.PropTypes.func,
  children: React.PropTypes.element,
  current: React.PropTypes.string,
  linkList: React.PropTypes.array,
  menus: React.PropTypes.array,
  expandable: React.PropTypes.string,
};

const mapStateToProps = state => state.navigation;

export default connect(mapStateToProps)(Navigation);

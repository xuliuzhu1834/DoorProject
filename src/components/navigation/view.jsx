import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Button, Icon } from 'antd';
import LeftPart from './leftPart';
import Filters from './filters';
import styles from './style.css';

const bgImages = require.context('./images/bg');

const buttonStyle = {
  position: 'relative',
  fontSize: '16px',
  bottom: '25px',
  right: '20px',
  opacity: 0.6,
  textAlign: 'left',
};
class Navigation extends Component {
  constructor(props) {
    super(props);
    props.dispatch({ type: 'nav_init' });
  }
  render() {
    return (
      <div className={styles.antLayoutBody}>
        {/* 主体部分 */}
        <div className={styles.antLayoutContent}>
          {/* 选择门 */}
          <LeftPart {...this.props} />
          <div className={styles.mainShow}>
            {/* 显示结果 */}
            <div className={styles.showEvery} height="600px">
              <div style={buttonStyle}>
                <Button
                  type="ghost" shape="circle-outline"
                  onClick={() => (
                    this.props.dispatch(
                      {
                        type: 'nav_expand',
                        value: this.props.expandable === 'expand' ? 'close' : 'expand',
                      })
                  )}
                ><Icon
                  type={this.props.expandable === 'expand' ? 'menu-fold' : 'menu-unfold'}
                  style={{ fontSize: '15px' }}
                /></Button>
              </div>
              <div width={'100%'}>
                <img alt="wall" src={bgImages('./墙3.png')} style={{ width: '100%' }} />
              </div>
            </div>
            {/* 条件 */}
            <div className={styles.filters}>
              <Filters {...this.props} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
Navigation.propTypes = {
  dispatch: PropTypes.func,
  expandable: PropTypes.string,
};

const mapStateToProps = state => state.navigation;

export default connect(mapStateToProps)(Navigation);

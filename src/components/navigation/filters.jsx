/**
 * Created by brook on 2017/2/27.
 */
import React, { Component, PropTypes } from 'react';
import {connect} from 'react-redux';
import assign from 'object-assign';
import { Tabs } from 'antd';
import ImageCheck from './imageCheckFiltersCom';
import { commit } from './action';
import styles from './style.css';

const TabPane = Tabs.TabPane;
const bgImages = require.context('./images/bg');
const doorsImages = require.context('./images/doors');
const locksImages = require.context('./images/hands');
const tabsProps = {
  type: 'small',
  renderTabBar: 'filters',
  renderTabContent: 'filters',
};

const Filters = ({
  dispatch,
  defaultwallSource,
  wallSource,
  defaultdoorSource,
  doorSource,
  defaulthandSource,
  handSource,
}) => (
  <Tabs {...tabsProps} >
    <TabPane tab="场景选择" key="1" className={styles.filtersTab}>
      {
        wallSource.map((v, i) => (
          <ImageCheck
            key={i}
            link={bgImages(`./${v.link}`)}
            text={v.text}
            status={v.status}
            onClick={() => dispatch(
              commit(
                'wallSource',
                [
                  ...defaultwallSource.slice(0, i),
                  assign({}, v, { status: !v.status }),
                  ...defaultwallSource.slice(i + 1),
                ],
              ),
            )}
          />
        ))
      }
    </TabPane>
    <TabPane tab="色板选择" key="2" className={styles.filtersTab}>
      {
        doorSource.map((v, i) => (
          <ImageCheck
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

    </TabPane>
    <TabPane tab="锁具选择" key="3" className={styles.filtersTab}>
      {
        handSource.map((v, i) => (
          <ImageCheck
            key={i}
            link={locksImages(`./${v.link}`)}
            text={v.text}
            status={v.status}
            onClick={() => dispatch(
              commit(
                'handSource',
                [
                  ...defaulthandSource.slice(0, i),
                  assign({}, v, { status: !v.status }),
                  ...defaulthandSource.slice(i + 1),
                ],
              ),
            )}
          />
        ))
      }
    </TabPane>
    <TabPane tab="猫眼选择" key="4">Content of Tab Pane 2</TabPane>
  </Tabs>
);


Filters.propTypes = {
  /* eslint react/forbid-prop-types:0 */
  dispatch: PropTypes.func,
  wallSource: PropTypes.array,
  defaultwallSource: PropTypes.array,
  doorSource: PropTypes.array,
  defaultdoorSource: PropTypes.array,
  defaulthandSource: PropTypes.array,
  handSource: PropTypes.array,
};

export default Filters;

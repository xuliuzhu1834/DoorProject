/**
 * Created by brook on 2017/2/27.
 */
import React, { PropTypes } from 'react';
import assign from 'object-assign';
import { Tabs, Spin, Alert } from 'antd';
import ImageCheck from './imageCheckFiltersCom';
import { commit } from './action';
import styles from './style.css';

const TabPane = Tabs.TabPane;
const tabsProps = {
  type: 'small',
  renderTabBar: 'filters',
  renderTabContent: 'filters',
};

const Filters = ({
  dispatch,
  filters,
  filterLoad,
  cates,
}) => (
  <Spin spinning={filterLoad}>
    {
      filters.length > 0 ?
        <Tabs {...tabsProps} >
          {
            filters.map((v, i) => (
              v.attribute ?
                <TabPane tab={v.attribute.name} key={i} className={styles.filtersTab}>
                  {
                    v.attribute_value.map((items, j) => (
                      <ImageCheck
                        key={j}
                        link={items.value}
                        text={items.name || 'Model'}
                        status={items.status || false}
                        onClick={() => {
                          const res = [
                            ...filters.slice(0, i),
                            assign({}, filters[i], {
                              attribute_value: [
                                ...filters[i].attribute_value.slice(0, j)
                                  .map(val => assign({}, val, { status: false })),
                                assign({}, items, { status: true }),
                                ...filters[i].attribute_value.slice(j + 1)
                                  .map(val => assign({}, val, { status: false })),
                              ],
                            }),
                            ...filters.slice(i + 1),
                          ];
                          dispatch(commit('filters', res));
                          const result = res.map(val => ({
                            attribute_id: val.attribute.id,
                            attribute_value_id: val.attribute_value
                              .find(k => k.status === true) ?
                              val.attribute_value.find(k => k.status === true).id : null,
                          }));
                          const cateId = cates.find(vv => vv.status).id;
                          dispatch({
                            type: 'nav_combine',
                            record: {
                              category_id: cateId,
                              combine_attribute: result.filter(k => k.attribute_value_id),
                            },
                          });
                        }}
                      />
                    ))
                  }
                </TabPane> : null
            ))
          }
        </Tabs>
        :
        <Alert
          message="自定制"
          description="请先在左边点击选取门款"
          type="info"
          showIcon
        />
    }
  </Spin>
);


Filters.propTypes = {
  dispatch: PropTypes.func,
  filterLoad: PropTypes.bool,
  cates: PropTypes.arrayOf(PropTypes.shape()),
  filters: PropTypes.arrayOf(PropTypes.shape()),
};

export default Filters;

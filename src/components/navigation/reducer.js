/**
 * Created by brook on 2017/2/26.
 */
import assign from 'object-assign';

const defaultState = {
  defaultdoorSource: [],
  defaultwallSource: [],
  doorSource: [
    {
      link: '门1.png',
      text: 'Door Model 1',
    },
    {
      link: '门2.png',
      text: 'Door Model 2',
    },
    {
      link: '门3.png',
      text: 'Door Model 3',
    },
  ],
  wallSource: [
    {
      link: '墙1.png',
      text: 'Background Model 1',
    },
    {
      link: '墙2.png',
      text: 'Background Model 2',
    },
    {
      link: '墙3.png',
      text: 'Background Model 3',
    },
  ],
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case 'nav_init':
      return assign({}, status, {
        doorSource: state.doorSource.map(v => assign({}, v, { status: false })),
        defaultdoorSource: state.doorSource.map(v => assign({}, v, { status: false })),
        wallSource: state.wallSource.map(v => assign({}, v, { status: false })),
        defaultwallSource: state.wallSource.map(v => assign({}, v, { status: false })),
      });
    case 'nav_commit':
      return assign({}, state, {
        [action.key]: action.value,
      });
    case 'nav_expand':
      return assign({}, state, {
        expandable: action.value,
      });
    default:
      return state;
  }
};
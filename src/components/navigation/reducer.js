/**
 * Created by brook on 2017/2/26.
 */
import assign from 'object-assign';

const defaultState = {
  defaultdoorSource: [],
  defaulthandSource: [],
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
  handSource: [
    {
      link: '门锁1.png',
      text: 'Lock Model 1',
    },
    {
      link: '门锁2.png',
      text: 'Lock Model 2',
    },
    {
      link: '门锁3.png',
      text: 'Lock Model 3',
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
        handSource: state.handSource.map(v => assign({}, v, { status: false })),
        defaulthandSource: state.handSource.map(v => assign({}, v, { status: false })),
      });
    case 'nav_commit':
      return assign({}, state, {
        [action.key]: action.value,
      });
    case 'nav_expand':
      return assign({}, state, {
        expandable: action.value,
      });
    case '@async/LOAD':
      switch (action.payload.key) {
        case 'nav_init':
          return assign({}, state, { load: true });
        default:
          return state;
      }
    case '@async/LOAD_FAIL':
      switch (action.payload.key) {
        case 'nav_init':
          console.log(action);
          return assign({}, state, { load: false });
        default:
          return state;
      }
    /* eslint no-case-declarations:0 */
    case '@async/LOAD_SUCCESS':
      const data = action.payload;
      switch (action.payload.key) {
        case 'nav_init':
          console.log(data);
          return assign({}, state, {
            load: false,
          });
        default:
          return state;
      }
    default:
      return state;
  }
};
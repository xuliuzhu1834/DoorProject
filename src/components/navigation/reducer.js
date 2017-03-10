/**
 * Created by brook on 2017/2/26.
 */
import assign from 'object-assign';

const defaultState = {
  expandable: 'expand',
  doorSource: [
    { link: '门1.png', text: '门款-1' },
    { link: '门2.png', text: '门款-2' },
    { link: '门3.png', text: '门款-33' },
  ],
  wallSource: [
    { link: '墙1.png', text: '场景-1' },
    { link: '墙2.png', text: '场景-2' },
    { link: '墙3.png', text: '场景-3' },
  ],
  handSource: [
    { link: '门锁1.png', text: '锁具-1' },
    { link: '门锁2.png', text: '锁具-2' },
    { link: '门锁3.png', text: '锁具-3' },
  ],
  cates: [],
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case 'nav_init':
      return assign({}, state, {
        doorSource: state.doorSource.map(v => assign({}, v, { status: false })),
        wallSource: state.wallSource.map(v => assign({}, v, { status: false })),
        handSource: state.handSource.map(v => assign({}, v, { status: false })),
      });
    case 'nav_commit':
      return assign({}, state, {
        [action.key]: action.value,
      });
    case 'nav_expand':
      return assign({}, state, {
        expandable: action.value,
      });
    case 'nav_load_init_sucess':
      return assign({}, state, {
        cates: action.data.map(v => assign({}, v, { status: false })),
      });
    default:
      return state;
  }
};

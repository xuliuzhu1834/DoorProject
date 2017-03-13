/**
 * Created by brook on 2017/2/26.
 */
import assign from 'object-assign';

const defaultState = {
  expandable: 'expand',
  cates: [],
  filters: [],
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case 'nav_commit':
      return assign({}, state, {
        [action.key]: action.value,
      });
    case 'nav_expand':
      return assign({}, state, {
        expandable: action.value,
      });
    case 'nav_load_init_success':
      return assign({}, state, {
        cates: action.data.map(v => assign({}, v, { status: false })),
      });
    case 'nav_filter_success':
      return assign({}, state, {
        filters: action.data
          .map(v => assign(
            {},
            v,
            { attribute_value: v.attribute_value.map(k => assign({}, k, { status: false })) },
            )),
      });
    case 'nav_combine_success':
      return assign({}, state, {
        combinePic: action.data,
      });
    default:
      return state;
  }
};

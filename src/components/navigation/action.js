/**
 * Created by brook on 2017/2/26.
 */

import { ASYNC } from 'redux-amrc';
import { initSer } from './server';

export const initData = () => ({
  [ASYNC]: {
    key: 'nav_init',
    promise: () => initSer(),
  },
});

export const commit = (key, value) => (
  {
    type: 'nav_commit',
    key,
    value,
  }
);

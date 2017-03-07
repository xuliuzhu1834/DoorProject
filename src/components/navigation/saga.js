/**
 * Created by brook on 2017/3/6.
 */

import { put } from 'redux-saga/effects';
import { initSer } from './server';
import wrapperFork from '../../lib/wrapperFork';

function* initDataSaga() {
  const data = yield initSer();
  console.log('data', data);
  yield put({ type: 'nav_load_init_sucess', data });
}

export default function* list() {
  /* /goods/get_goods_info */
  yield wrapperFork('nav_init', initDataSaga);
}

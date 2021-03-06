/**
 * Created by brook on 2017/3/6.
 */
import { put } from 'redux-saga/effects';
import { initSer, filters, combineSer } from './server';
import wrapperFork from '../../lib/wrapperFork';

function* initDataSaga() {
  const data = yield initSer();
  yield put({ type: 'nav_load_init_success', data: data.info.data });
}
function* filterSaga(action) {
  const data = yield filters(action.id);
  yield put({ type: 'nav_filter_success', data: data.info.data });
}

function* combineSaga(action) {
  const data = yield combineSer(action.record);
  yield put({ type: 'nav_combine_success', data: data.info.data });
}


export default function* list() {
  /* /goods/get_goods_info */
  yield wrapperFork('nav_init', initDataSaga);
  yield wrapperFork('nav_filter', filterSaga);
  yield wrapperFork('nav_combine', combineSaga);
}

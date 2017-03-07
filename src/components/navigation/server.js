import fetch from '../../lib/fetch';

export const initSer = () => (
  fetch('/category/list_category', {
    method: 'get',
  })
    .then(res => res)
);

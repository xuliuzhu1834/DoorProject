import fetch from '../../lib/fetch';

export const initSer = () => (
  fetch('/category/list_category', {
    method: 'get',
  })
    .then(res => res)
);
export const filters = id => (
  fetch(`/attribute/list_door_attribute?category_id=${id}`, {
    method: 'get',
  })
    .then(res => res)
);
export const combineSer = record => (
  fetch('/door/combine_door', {
    method: 'post',
    body: JSON.stringify(record),
  })
    .then(res => res)
);


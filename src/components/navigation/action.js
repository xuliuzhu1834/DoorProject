/**
 * Created by brook on 2017/2/26.
 */

export const commit = (key, value) => (
  {
    type: 'nav_commit',
    key,
    value,
  }
);

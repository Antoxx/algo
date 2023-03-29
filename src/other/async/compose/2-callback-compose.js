import assert from 'assert';

const inc = (x, callback) => callback(null, ++x);
const multiply2 = (x, callback) => callback(null, x * 2);
const pow = (x, callback) => callback(null, x * x);

const compose =
  (...fns) =>
  (x, callback) => {
    const fn = fns.shift();
    if (fns.length === 0) {
      return fn(x, callback);
    }

    fn(x, (err, res) => {
      if (err) {
        callback(err);
        return;
      }

      compose(...fns)(res, callback);
    });
  };

compose(inc)(5, (_, res) => {
  assert.deepStrictEqual(res, 6);
});

compose(inc, pow)(2, (_, res) => {
  assert.deepStrictEqual(res, 9);
});

compose(
  inc,
  multiply2,
  pow,
)(1, (_, res) => {
  assert.deepStrictEqual(res, 16);
});

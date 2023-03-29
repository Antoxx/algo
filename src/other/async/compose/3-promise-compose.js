import assert from 'assert';

const inc = (x) => Promise.resolve(++x);
const multiply2 = (x) => Promise.resolve(x * 2);
const pow = (x) => Promise.resolve(x * x);

const compose =
  (...fns) =>
  (x) => {
    const fn = fns.shift();
    if (fns.length === 0) {
      return fn(x);
    }

    return fn(x).then((res) => compose(...fns)(res));
  };

assert.deepStrictEqual(await compose(inc)(5), 6);
assert.deepStrictEqual(await compose(inc, pow)(2), 9);
assert.deepStrictEqual(await compose(inc, multiply2, pow)(1), 16);

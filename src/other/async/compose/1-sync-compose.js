import assert from 'assert';

const inc = (x) => ++x;
const multiply2 = (x) => x * 2;
const pow = (x) => x * x;

const compose1 =
  (...fns) =>
  (x) => {
    let res = x;
    for (const fn of fns) {
      res = fn(res);
    }
    return res;
  };

const compose2 =
  (...fns) =>
  (x) =>
    fns.reduce((acc, f) => f(acc), x);

function test(fn) {
  assert.deepStrictEqual(fn(inc)(5), 6);
  assert.deepStrictEqual(fn(inc, pow)(2), 9);
  assert.deepStrictEqual(fn(inc, multiply2, pow)(1), 16);
}

test(compose1);
test(compose2);

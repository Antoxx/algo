import assert from 'assert';

const inc = async (x) => ++x;
const multiply2 = async (x) => x * 2;
const pow = async (x) => x * x;

const compose1 =
  (...fns) =>
  async (x) => {
    let res = x;
    for (const fn of fns) {
      res = await fn(res);
    }
    return res;
  };

const compose2 =
  (...fns) =>
  async (x) =>
    fns.reduce(async (acc, f) => await f(await acc), x);

const compose3 =
  (...fns) =>
  async (x) =>
    fns.reduce((acc, f) => acc.then(f), Promise.resolve(x));

async function test(fn) {
  assert.deepStrictEqual(await fn(inc)(5), 6);
  assert.deepStrictEqual(await fn(inc, pow)(2), 9);
  assert.deepStrictEqual(await fn(inc, multiply2, pow)(1), 16);
}

test(compose1);
test(compose2);
test(compose3);

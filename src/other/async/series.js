import assert from 'assert';

function series(promises, callback) {
  const results = [];
  let cnt = promises.length;
  let idx = 0;

  function recurseResult(err, res) {
    results.push(err || res);

    if (idx === cnt - 1) {
      return callback(results);
    }

    idx++;

    promises[idx].then(
      (res) => recurseResult(null, res),
      (err) => recurseResult(err),
    );
  }

  promises[0].then(
    (res) => recurseResult(null, res),
    (err) => recurseResult(err),
  );
}

const promiseN = (n) => new Promise((res) => setTimeout(() => res(n), n));

series([promiseN(300), promiseN(100), promiseN(200)], (results) => {
  assert.deepEqual(results, [300, 100, 200]);
});

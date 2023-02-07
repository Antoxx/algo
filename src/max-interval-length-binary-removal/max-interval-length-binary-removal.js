import assert from 'assert';

function maxIntervalLengthBinaryRemoval(arr) {
  let maxLength = 0;
  let zeroFlag = false;
  let tmpLen = 0;
  const tmpArrs = [];
  let tmpArr = [];
  const len = arr.length;

  for (let i = 0; i < len; i++) {
    let isLast = i === len - 1;
    let v = arr[i];

    // is 1
    if (v) {
      tmpLen += 1;
    } else {
      // prev = 0
      if (zeroFlag) {
        // tmpArr has values
        if (tmpArr.length) {
          tmpArrs.push(tmpArr);
          tmpArr = [];
        }
      } else {
        tmpArr.push(tmpLen);
        tmpLen = 0;
      }
    }

    if (isLast) {
      if (tmpArr.length) {
        if (tmpLen) {
          tmpArr.push(tmpLen);
        }

        tmpArrs.push(tmpArr);
      } else {
        if (tmpLen) {
          tmpArrs.push([tmpLen]);
        }
      }
    } else {
      zeroFlag = !v;
    }
  }

  maxLength = tmpArrs.reduce((acc, tmpArr) => {
    let currMaxLength = 0;
    const len = tmpArr.length;
    if (len >= 2) {
      for (let i = 0; i < tmpArr.length - 1; i++) {
        currMaxLength = Math.max(acc, tmpArr[i] + tmpArr[i + 1]);
      }
    } else {
      currMaxLength = Math.max(acc, tmpArr[0]);
    }

    return currMaxLength;
  }, 0);

  return maxLength;
}

function test(fn) {
  assert.deepStrictEqual(fn([]), 0, fn.name);
  assert.deepStrictEqual(fn([0]), 0, fn.name);
  assert.deepStrictEqual(fn([0, 0]), 0, fn.name);
  assert.deepStrictEqual(fn([1]), 1, fn.name);
  assert.deepStrictEqual(fn([1, 0]), 1, fn.name);
  assert.deepStrictEqual(fn([0, 1]), 1, fn.name);
  assert.deepStrictEqual(fn([1, 1, 0]), 2, fn.name);
  assert.deepStrictEqual(fn([1, 0, 1]), 2, fn.name);
  assert.deepStrictEqual(fn([1, 0, 0, 1]), 1, fn.name);
  assert.deepStrictEqual(fn([1, 1, 0, 1, 0, 1, 1]), 3, fn.name);
  assert.deepStrictEqual(fn([0, 1, 1, 0, 0, 0, 1, 1]), 2, fn.name);
}

test(maxIntervalLengthBinaryRemoval);

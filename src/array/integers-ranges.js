import assert from 'assert';

/**
 * Дан список интов, повторяющихся элементов в списке нет.
 * Нужно преобразовать это множество в строку, сворачивая соседние по числовому ряду числа в диапазоны.
 * Примеры:
 * [1,4,5,2,3,9,8,11,0] => "0-5,8-9,11"
 * [1,4,3,2] => "1-4"
 * [1,4] => "1,4"
 * [1,4,1,4] => "1,4"
 */

function intPeriods(arr) {
  // without using Set to get all unique values
  arr = [...arr].sort((a, b) => a - b);

  let cnt = arr.length;
  if (cnt <= 1) {
    return arr.toString();
  }

  const resArr = [];
  let prevVal = arr[0];
  let tmpArr = [prevVal];

  const addToRes = () => {
    if (tmpArr.length === 1) {
      resArr.push(tmpArr[0]);
    } else {
      resArr.push(`${tmpArr.at(0)}-${tmpArr.at(-1)}`);
    }
  };

  for (let i = 1; i < cnt; i++) {
    const val = arr[i];
    const isLast = i === cnt - 1;

    if (val === prevVal) {
      if (isLast) {
        addToRes();
      }

      continue;
    }

    const isSubsequent = val === prevVal + 1;
    if (isSubsequent) {
      tmpArr.push(val);
    } else {
      addToRes();
      tmpArr = [val];
    }

    if (isLast) {
      addToRes();
    } else {
      prevVal = val;
    }
  }

  return resArr.join(',');
}

function intPeriods2(arr) {
  return [...arr]
    .sort((a, b) => a - b)
    .reduce((acc, val) => {
      const currRange = acc[acc.length - 1];
      if (!currRange || val > currRange.last + 1) {
        acc.push({ first: val, last: val });
      } else {
        currRange.last = val;
      }
      return acc;
    }, [])
    .map((val) => val.first + (val.first !== val.last ? '-' + val.last : ''))
    .join();
}

function test(fn) {
  assert.deepStrictEqual(fn([]), '', fn.name);
  assert.deepStrictEqual(fn([1]), '1', fn.name);
  assert.deepStrictEqual(fn([1, 4]), '1,4', fn.name);
  assert.deepStrictEqual(fn([1, 4, 1, 4]), '1,4', fn.name);
  assert.deepStrictEqual(fn([1, 4, 3, 2]), '1-4', fn.name);
  assert.deepStrictEqual(fn([1, 4, 5, 5, 2, 3, 9, 8, 11, 5, 0]), '0-5,8-9,11', fn.name);
}

test(intPeriods);
test(intPeriods2);

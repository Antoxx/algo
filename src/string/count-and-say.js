import assert from 'assert';

/**
 * 38. Count and Say
 *
 * The count-and-say sequence is a sequence of digit strings defined by the recursive formula:
 * countAndSay(1) = "1"
 * countAndSay(n) is the way you would "say" the digit string from countAndSay(n-1), which is then converted into a different digit string.
 *
 * countAndSay(1) = "1"
 * countAndSay(2) = say "1" = one 1 = "11"
 * countAndSay(3) = say "11" = two 1's = "21"
 * countAndSay(4) = say "21" = one 2 + one 1 = "12" + "11" = "1211"
 * n = 5: we have one 1 and one 2 and two 1's so -> 111221
 * n = 6: we have three 1's, two 2's and one 1 so -> 312211
 * n = 7: we have one 3, one 1, two 2's and two 1's -> 13112221
 *
 * https://leetcode.com/problems/count-and-say/
 */

function countAndSay(n) {
  if (n === 0) {
    return '';
  }

  if (n === 1) {
    return '1';
  }

  let ans = '1';
  let i = 2;
  while (i <= n) {
    let tmpNum = ans[0];
    let tmpNumCnt = 1;
    let tmpAns = '';
    for (let j = 1; j < ans.length; j++) {
      if (ans[j] === tmpNum) {
        tmpNumCnt++;
      } else {
        tmpAns += tmpNumCnt;
        tmpAns += tmpNum;

        tmpNum = ans[j];
        tmpNumCnt = 1;
      }
    }

    tmpAns += tmpNumCnt;
    tmpAns += tmpNum;

    ans = tmpAns;
    i++;
  }

  return ans;
}

function test(fn) {
  assert.deepStrictEqual(fn(1), '1', fn.name);
  assert.deepStrictEqual(fn(2), '11', fn.name);
  assert.deepStrictEqual(fn(3), '21', fn.name);
  assert.deepStrictEqual(fn(4), '1211', fn.name);
}

test(countAndSay);

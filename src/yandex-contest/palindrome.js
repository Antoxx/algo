import assert from 'assert';

/**
 * Помогите Васе понять, будет ли фраза палиндромом. Учитываются только буквы и цифры, заглавные и строчные буквы считаются одинаковыми.
 * Решение должно работать за O(N), где N — длина строки на входе.
 *
 * Формат ввода
 * В единственной строке записана фраза или слово. Буквы могут быть только латинские. Длина текста не превосходит 20000 символов.
 * Фраза может состоять из строчных и прописных латинских букв, цифр, знаков препинания.
 *
 * Формат вывода
 * Выведите «True», если фраза является палиндромом, и «False», если не является.
 */

function isPalindrome(s) {
  let cnt = s.length;
  if (cnt === 0) {
    return false;
  }

  if (cnt === 1) {
    return true;
  }

  let left = 0;
  let right = cnt - 1;
  let lChar;
  let rChar;

  while (left < right) {
    while ((lChar = s[left]?.toLowerCase()) && (lChar < 'a' || lChar > 'z') && left <= right) {
      left++;
    }

    while ((rChar = s[right]?.toLowerCase()) && (rChar < 'a' || rChar > 'z') && left <= right) {
      right--;
    }

    if (left === right) {
      return true;
    }

    if (lChar !== rChar) {
      return false;
    }

    left++;
    right--;
  }

  return true;
}

function test(fn) {
  // assert.deepStrictEqual(fn('   '), true, fn.name);
  assert.deepStrictEqual(fn(' a '), true, fn.name);
  assert.deepStrictEqual(fn(' ab'), false, fn.name);
  assert.deepStrictEqual(fn(' ab '), false, fn.name);
  assert.deepStrictEqual(fn('A man, a plan, a canal: Panama'), true, fn.name);
}

test(isPalindrome);

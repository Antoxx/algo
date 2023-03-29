import assert from 'assert';

/**
 * Условие
 * Вам даны строки в запакованном виде. Определим запакованную строку (ЗС) рекурсивно.
 * Строка, состоящая только из строчных букв английского алфавита является ЗС.
 * Если A и B —– корректные ЗС, то и AB является ЗС.
 * Если A —– ЗС, а n — однозначное натуральное число, то n[A] тоже ЗС.
 * При этом запись n[A] означает, что при распаковке строка A записывается подряд n раз.
 * Найдите наибольший общий префикс распакованных строк и выведите его (в распакованном виде).
 *
 * Иными словами, пусть сложение —– это конкатенация двух строк, а умножение строки на число — повтор строки соответствующее число раз.
 * Пусть функция f умеет принимать ЗС и распаковывать её. Если ЗС D имеет вид D=AB, где A и B тоже ЗС, то f(D) = f(A) + f(B).
 * Если D=n[A], то f(D) = f(A) × n.
 *
 * Формат ввода
 * В первой строке записано число n (1 ≤ n ≤ 1000) –— число строк.
 * Далее в n строках записаны запакованные строки. Гарантируется, что эти строки корректны, то есть удовлетворяют указанному рекурсивному определению.
 * Длина строк после распаковки не превосходит 10^5.
 *
 * Формат вывода
 * Выведите наибольший общий префикс распакованных строк.
 */

function maxPrefix(strs) {
  function unpack(packedStr) {
    const symbolStack = [];
    const multiplierStack = [];

    for (let char of packedStr) {
      if (parseInt(char)) {
        multiplierStack.push(parseInt(char));
      } else if (char === '[') {
        symbolStack.push([]);
      } else if (char === ']') {
        const s = symbolStack.pop().join('').repeat(multiplierStack.pop());
        if (symbolStack.length) {
          symbolStack[symbolStack.length - 1].push(s);
        } else {
          symbolStack.push([s]);
        }
      } else {
        if (!symbolStack.length) {
          symbolStack.push([]);
        }
        symbolStack[symbolStack.length - 1].push(char);
      }
    }

    return symbolStack.pop().join('');
  }

  const words = strs.map(unpack);
  const word = words[0];

  let prefix = '';
  for (let i = 0; i < word.length; i++) {
    for (let j = 1; j < words.length; j++) {
      if (word[i] !== words[j][i]) {
        return prefix;
      }
    }

    prefix += word[i];
  }

  return word;
}

assert.deepStrictEqual(maxPrefix(['2[a]2[ab]', '3[a]2[r2[t]]', 'a2[aa3[b]]']), 'aaa');

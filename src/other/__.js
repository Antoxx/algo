// середина массива
function middleVal(arr) {
  const idx = Math.ceil(arr.length / 2) - 1;
  return arr[idx];
}

// Тасование Фишера — Йетса
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    // случайный индекс от 0 до i
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

// sumOfArray([1, [2], [[[3]]]]) === 6
function sumOfArray(arr) {
  return arr.flat(Infinity).reduce((a, b) => a + b, 0);
}

// группировка массива в объект по свойству
function groupById(array) {
  return array.reduce((obj, value) => {
    obj[value.id] = value;
    return obj;
  }, {});
}

// максимальное число в массиве
function arrMax(arr) {
  // return Math.max.apply(null, arr);
  return arr.reduce(function (prev, item) {
    return Math.max(prev, item);
  });
}

// ==========================================

const randomChar = () => String.fromCharCode(Math.floor(Math.random() * 25 + 97));

// случайный пароль из N символов
function randomPassword(len = 8) {
  function getChars(fromCode, toCode) {
    let str = '';
    for (let i = fromCode; i <= toCode; i++) {
      str += String.fromCharCode(i);
    }
    return str;
  }

  const chars = getChars(49, 57) + getChars(65, 90) + getChars(97, 123);

  let password = '';
  while (len--) {
    password += chars[(Math.random() * chars.length) | 0];
  }

  return password;
}

function generateRandomString(length = 10) {
  const charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  return Array(length)
    .fill(null)
    .map(() => charset.charAt(Math.floor(Math.random() * charset.length)))
    .join('');
}

// ==========================================

// пуст ли объект
function isEmpty(obj) {
  for (const _ in obj) {
    return false;
  }
  return true;
}

// ==========================================

// последнее число месяца
function getLastDayOfMonth(year, month) {
  let date = new Date(year, month + 1, 0);
  return date.getDate();
}

// удаление циклических ссылок
JSON.stringify(obj, (key, value) => {
  return key === 'occupiedBy' ? undefined : value;
});

// восстановление объектов по ключу date
JSON.parse(str, (key, value) => {
  if (key === 'date') return new Date(value);
  return value;
});

// ==========================================

// сумма всех чисел до (цикл)
function sum(num) {
  let s = 0;
  for (let i = 1; i <= num; i++) {
    s += i;
  }
  return s;
}

// сумма всех чисел до (рекурсия)
function sum(num) {
  return num === 1 ? 1 : num + sum(num - 1);
}

// сумма всех чисел до (арифметическая прогрессия)
function sum(n) {
  return (n * (n + 1)) / 2;
}

// сумма N чисел
function sum(...args) {
  return args.reduce((res, arg) => (res += arg), 0);
}

// ==========================================

// вывод односвязного списка
let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null,
      },
    },
  },
};

function printList(list) {
  let next = list;
  while (next) {
    console.log(next.value);
    next = next.next;
  }
  /*
  do {
    console.log(next.value);
  } while(next = next.next)
  */
}

// вывод односвязного списка (рекурсия)
function printList(list) {
  console.log(list.value);
  list.next && printList(list.next);
}

// вывод односвязного списка в обратном порядке
function printList(list) {
  let next = list;
  let arr = [];
  while (next) {
    arr.push(next.value);
    next = next.next;
  }
  for (let i = arr.length - 1; i >= 0; i--) {
    console.log(arr[i]);
  }
}

// вывод односвязного списка в обратном порядке (рекурсия)
function printList(list) {
  list.next && printList(list.next);
  console.log(list.value);
}

// ==========================================

// sum(1)(5)(-6)(8)...
function sum(a) {
  let currentSum = a;
  function f(b = 0) {
    currentSum += b;
    return f;
  }
  // чтобы адекватно применяться в качестве строки или числа
  f.toString = () => currentSum;
  return f;
}

// const a = sum(1)(5)(-6)(8)...
// a(5) => function
// a() => number
function sum (num) {
  let fullSum = num
  function fn (num2 = 0) {
    if (num2 === 0) {
      return fullSum
    } else {
      fullSum += num2
      return fn
    }
  }
  return fn
}

// декоратор метода (аля sinon.spy)
function work(a, b) {
  return a + b;
}
function spy(func) {
  const f = function (...args) {
    f.calls.push(args);
    return func.apply(this, args);
  };
  f.calls = [];
  return f;
}

work = spy(work);
work(1, 2); // 3
work(4, 5); // 9

// ==========================================

const sleep = (ms) => new Promise((res) => setTimeout(res, ms));

// ==========================================

// "delay" decorator
function f() {
  console.log('Hello');
}
function delay(func, ms) {
  return (...args) => {
    setTimeout(func.bind(this, args), ms);
  };
}
var f1000 = delay(f, 1000);
var f1500 = delay(f, 1500);
f1000('test'); // "test" in 1000 ms
f1500('test'); // "test" in 1500 ms

// ==========================================

// "debounce" decorator - 1 execution for N ms
function debounce(func, ms) {
  let busy = false;
  return function (...args) {
    if (busy) {
      return;
    }

    busy = true;
    setTimeout(() => (busy = false), ms);

    return func.apply(this, args);
  };
}
let log = debounce(console.log, 1000);
log(1); // immediately
log(2); // ignored
setTimeout(() => log(3), 100); // ignored (only 100ms since last execution)
setTimeout(() => log(4), 1100); // execute
setTimeout(() => log(5), 1500); // ignored (only 400ms since last execution)

// ==========================================

// "throttle" decorator - execute last invocation for N ms only after N ms
function throttle(func, ms) {
  let busy = false;
  let lastThis;
  let lastArgs;
  return function (...args) {
    if (busy) {
      lastThis = this;
      lastArgs = args;
      return;
    }

    busy = true;
    setTimeout(() => {
      busy = false;

      if (lastArgs) {
        const res = func.apply(lastThis, lastArgs);
        lastThis = null;
        lastArgs = null;
        return res;
      }
    }, ms);

    return func.apply(this, args);
  };
}
function f(a) {
  console.log(a);
}

// f1000 передаёт вызовы f максимум раз в 1000 мс
let f1000 = throttle(f, 1000);
f1000(1); // показывает 1
f1000(2); // (ограничение, 1000 мс ещё нет)
f1000(3); // (ограничение, 1000 мс ещё нет)
// когда 1000 мс истекли ...
// ...выводим 3, промежуточное значение 2 было проигнорировано

// ==========================================

// частичное применение без контекста
function partial (func, ...args1) {
  return (...args2) => func.call(this, ...args1, ...args2)
}

// ==========================================

// promisify
function promisify(func) {
  return (...args) => {
    return new Promise((resolve, reject) => {
      func(...args, (err, data) => {
        err ? reject(err) : resolve(data);
      });
    });
  };
}
function promisify2(func) {
  return (...args) => {
    return new Promise((resolve, reject) => {
      args.push((err, data) => {
        err ? reject(err) : resolve(data);
      });
      func(...args);
    });
  };
}
function func(arg1, arg2, arg3, callback) {
  setTimeout(() => {
    const res = [arg1, arg2, arg3];
    callback(null, res);
  }, 500);
}
let funcPromisified = promisify(func);
console.log(await funcPromisified(1, 2, 3));

// ==========================================

// currying
function curry(func) {
  return function curried(...args) {
    if (args.length >= func.length) {
      return func.apply(this, args);
    } else {
      return function (...args2) {
        return curried.apply(this, args.concat(args2));
      };
    }
  };
}

function curry(func) {
  const args = [];
  return function curried(...args2) {
    args.push(...args2);

    if (args.length >= func.length) {
      return func(...args);
    } else {
      return curried;
    }
  };
}

function sum (a, b, c, d) {
  return a + b + c + d
}

const curried = curry(sum)
const curried2 = curried(4)(6)
console.log(curried2)
console.log(curried2(5)(5))

console.log(curry(sum)(1,2,3,4))

const curried3 = curry(sum)
const curried31 = curried3(1)
const curried32 = curried31(2)
const curried33 = curried32(1)
const curried34 = curried33(1)
console.log(curried31)
console.log(curried32)
console.log(curried33)
console.log(curried34)

// ==========================================

// сортировка массива строк с учетом Ё
['тигр', 'ёж', 'енот', 'ехидна', 'АИСТ', 'ЯК'].sort((a, b) => a.localeCompare(b));

// ==========================================

// buffer
function buffer(str) {
  let buffer = str;
  return (str) => {
    return str ? (buffer += str) : buffer;
  };
}
let buf = buffer('123');
console.log(buf('456')); // '123456'
console.log(buf('789')); // '123456789'
console.log(buf()); // '123456789'

// ==========================================

function firstUTF8Symbols() {
  var max = 10000;
  for (var i = 1; i <= max; i++) {
    var err = false;
    var hex = i.toString(16);
    hex = new Array(4 - hex.length + 1).join('0') + hex;

    var char = String.fromCharCode('0x' + hex);

    try {
      var f = new Function('return ' + char + '1111');
    } catch (e) {
      var err = true;
    } finally {
      if (err) {
        console.log('=' + char + '=' + (err ? '     #' + hex : ''));
      }
    }
  }
}

// ==========================================

function wrapAsync(fn) {
  return (...args) => setTimeout(() => fn(args), 1000);
}
let f = wrapAsync((name) => {
  console.log(name);
});
f('Anton');

// ==========================================

const config = await fs
  .readFile('config.json', 'utf-8')
  .then(JSON.parse)
  .catch(() => ({ port: 80 }));

import { deepStrictEqual } from 'assert';

// Написать функцию, которая:
// 1. на вход получает данные (строка|объект)
// 2. пробегает:
// если по строке - ищет определенную маску в строке,
// если по объекту - вглубь по ключам и значениям - (без ограничений по глубине)
// 3. вызывает асинхронный колбек функцию для подмены
// 4. подменяет маску на результат колбека

// маска:
// "jq(key)" => key
// колбек:
// result = await cb(key)
// пример применения:
// value = await replace(value, async (key) => await cache[key])
// пример объекта:
// {
//  first: "jq(one)",
//  second: "jq(two)",
//  "jq(three)": {
//    "one": [ 'jq(four)', 6768686, "example string"]
//  }
//}
//

interface T {
  [key: string]: any;
}

const regexp = /jq\((.+)\)/;
const replace = async (value: string | T | T[], cb: Function) => {
  if (typeof value === 'string') {
    const m = value.match(regexp);
    if (!m) {
      return value;
    }

    const newValue = (await cb(m[1])) || m[1];
    return value.slice(0, m.index) + newValue + value.slice(m.index + m[0].length + 1);
  } else if (Array.isArray(value)) {
    for (let i = 0; i < value.length; i++) {
      value[i] = await replace(value[i], cb);
    }
    return value;
  } else {
    for (let key in value) {
      if (value.hasOwnProperty(key)) {
        const newKey = ((await replace(key, cb)) || key) as string;
        value[newKey] = await replace(value[key], cb);
        if (key !== newKey) {
          delete value[key];
        }
      }
    }

    return value;
  }
};

const cache: NodeJS.Dict<any> = {
  zero: 0,
  one: 1,
  two: 2,
  three: 3,
  four: 4,
  six: 6,
};

deepStrictEqual(
  await replace('jq(ten)', async (key: string) => {
    return cache[key];
  }),
  'ten',
);
deepStrictEqual(
  await replace(
    {
      first: 'jq(one)',
      second: 'jq(two)',
      'jq(three)': {
        one: [
          'jq(four)',
          6768686,
          'example string jq(five)',
          'qwerty jq(six)',
          { 'jq(seven)': 'seven' },
        ],
      },
    },
    async (key: string) => {
      return cache[key];
    },
  ),
  {
    first: '1',
    second: '2',
    '3': {
      one: [
        '4',
        6768686,
        'example string five',
        'qwerty 6',
        {
          seven: 'seven',
        },
      ],
    },
  },
);

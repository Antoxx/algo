/**
 * Вася решил запутать маму —– делать дела в обратном порядке. Список его дел теперь хранится в двусвязном списке.
 * Напишите функцию, которая вернёт список в обратном порядке. Внимание: в этой задаче не нужно считывать входные данные.
 * Нужно написать только функцию, которая принимает на вход голову двусвязного списка и возвращает голову перевёрнутого списка.
 * Ниже дано описание структуры, которая задаёт вершину списка.
 *
 * Формат ввода
 * Функция принимает на вход единственный аргумент — голову двусвязного списка. Длина списка не превосходит 1000 элементов.
 * Список не бывает пустым.
 *
 * Формат вывода
 * Функция должна вернуть голову развернутого списка.
 */

import assert from 'assert';
import { listNodeToArr, arrToDoublyListNode } from '../util.mjs';

function reverse(root) {
  let ans = null;
  let node = root;
  while (node) {
    const nextNode = node.next;
    if (!nextNode) {
      ans = node;
    }

    [node.next, node.prev] = [node.prev, node.next];

    node = nextNode;
  }

  return ans;
}

function test(fn) {
  assert.deepStrictEqual(
    listNodeToArr(fn(arrToDoublyListNode([0, 1, 2, 3]))),
    [3, 2, 1, 0],
    fn.name,
  );
}

test(reverse);

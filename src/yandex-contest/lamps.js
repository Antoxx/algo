/**
 * Гоша повесил на стену гирлянду в виде бинарного дерева, в узлах которого находятся лампочки. У каждой лампочки есть своя яркость.
 * Уровень яркости лампочки соответствует числу, расположенному в узле дерева.
 * Помогите Гоше найти самую яркую лампочку в гирлянде, то есть такую, у которой яркость наибольшая.
 */

import assert from 'assert';
import { arrToTreeNode } from '../util.mjs';

function findBrightestLamp(node) {
  if (!node) {
    return 0;
  }

  return Math.max(node.val, findBrightestLamp(node.left), findBrightestLamp(node.right));
}

function test(fn) {
  assert.deepStrictEqual(fn(arrToTreeNode([])), 0, fn.name);
  assert.deepStrictEqual(fn(arrToTreeNode([3, 9, 20, null, null, 15, 7])), 20, fn.name);
  assert.deepStrictEqual(fn(arrToTreeNode([2, null, 3, null, 4, null, 5, null, 6])), 6, fn.name);
}

test(findBrightestLamp);

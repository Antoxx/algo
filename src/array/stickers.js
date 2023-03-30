import assert from 'assert';

/**
 * Михаил читает лекции по алгоритмам. За кадром стоит доска размером W*H сантиметров. Михаилу нужно разместить на доске N квадратных стикеров со шпаргалки, при этом длина стороны стикера в сантиметрах должна быть целым числом.
 * Определите максимальную длину стороны стикера, чтобы все стикеры поместились на доске.
 */

function findStickerSize(w, h, n) {
  function checkStickers(size) {
    return Math.floor(w / size) * Math.floor(h / size) >= n;
  }
  function rBinSearch(l, r) {
    while (l < r) {
      // +1 это особенность правого поиска
      let m = Math.floor((l + r + 1) / 2);
      if (checkStickers(m)) {
        l = m;
      } else {
        r = m - 1;
      }
    }

    return l;
  }

  return rBinSearch(1, 100);
}

function test(fn) {
  assert.deepStrictEqual(fn(30, 20, 7), 7, fn.name);
}

test(findStickerSize);

import assert from 'assert'

function uniqueByFromAndSet (arr) {
  return Array.from(new Set(arr))
}

function uniqueByOfAndSet (arr) {
  return Array.of(...new Set(arr))
}

function uniqueBySet (arr) {
  return [...new Set(arr)]
}

function uniqueByFilter (arr) {
  return arr.filter((val, idx) => arr.indexOf(val) === idx)
}

function uniqueByReduce (arr) {
  return arr.reduce((unique, val) => {
    if (!unique.includes(val)) {
      unique.push(val)
    }
    return unique
  }, [])
}

function test(fn) {
  assert.deepStrictEqual(fn([3, 2, 3]), [3, 2], fn.name)
  assert.deepStrictEqual(fn([2, 2, 1, 1, 1, 2, 2, 0]), [2, 1, 0], fn.name)
}

test(uniqueByFromAndSet)
test(uniqueByOfAndSet)
test(uniqueBySet)
test(uniqueByFilter)
test(uniqueByReduce)
import assert from "assert"

function rightBinarySearch (nums, target) {
  let left = 0
  let right = nums.length - 1

  while (left + 1 < right) {
    const mid = Math.floor((left + right) / 2)

    if (nums[mid] > target) {
      right = mid
    } else {
      left = mid
    }
  }

  if (nums[right] === target) {
    return right
  }

  if (nums[left] === target) {
    return left
  }

  return -1
}

function test(fn) {
  const nums = [1, 1, 2, 4, 4, 4, 5, 5]
  assert.equal(fn(nums, 0), -1)
  assert.equal(fn(nums, 1), 1)
  assert.equal(fn(nums, 2), 2)
  assert.equal(fn(nums, 3), -1)
  assert.equal(fn(nums, 4), 5)
  assert.equal(fn(nums, 5), 7)
}

test(rightBinarySearch)
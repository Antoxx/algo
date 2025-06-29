import assert from "assert"

function leftBinarySearch (nums, target) {
  let left = 0
  let right = nums.length - 1

  while (left + 1 < right) {
    const mid = Math.floor((left + right) / 2)

    if (nums[mid] < target) {
      left = mid
    } else {
      right = mid
    }
  }

  if (nums[left] === target) {
    return left
  }

  if (nums[right] === target) {
    return right
  }

  return -1
}

// search not in cutoff [left, right] but in interval (left, right)
function leftBinarySearchOptimized (nums, target) {
  let left = -1
  let right = nums.length

  while (left + 1 < right) {
    const mid = Math.floor((left + right) / 2)

    if (nums[mid] < target) {
      left = mid
    } else {
      right = mid
    }
  }

  if (right < nums.length && nums[right] === target) {
    return right
  }

  return -1
}

function test(fn) {
  const nums = [1, 1, 2, 4, 4, 4, 5, 5]
  assert.equal(fn(nums, 0), -1)
  assert.equal(fn(nums, 1), 0)
  assert.equal(fn(nums, 2), 2)
  assert.equal(fn(nums, 3), -1)
  assert.equal(fn(nums, 4), 3)
  assert.equal(fn(nums, 5), 6)
}

test(leftBinarySearch)
test(leftBinarySearchOptimized)
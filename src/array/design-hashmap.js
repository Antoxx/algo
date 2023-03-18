import assert from 'assert';

/**
 * 706. Design HashMap
 *
 * Design a HashMap without using any built-in hash table libraries.
 * Implement the MyHashMap class:
 * - MyHashMap() initializes the object with an empty map.
 * - void put(int key, int value) inserts a (key, value) pair into the HashMap. If the key already exists in the map, update the corresponding value.
 * - int get(int key) returns the value to which the specified key is mapped, or -1 if this map contains no mapping for the key.
 * - void remove(key) removes the key and its corresponding value if the map contains the mapping for the key.
 *
 * https://leetcode.com/problems/design-hashmap/
 */

class MyHashMap {
  size = 1e4;

  keys = Array(this.size);
  values = Array(this.size);

  constructor() {}

  put(key, value) {
    const pos = this.resolvePosition(key);
    if (this.keys[pos] === undefined) {
      this.keys[pos] = key;
      this.values[pos] = value;
    } else {
      this.values[pos] = value;
    }

    return this;
  }

  get(key) {
    const pos = this.resolvePosition(key);
    if (this.keys[pos] === undefined) {
      return -1;
    }

    return this.values[pos];
  }

  remove(key) {
    const pos = this.resolvePosition(key);
    if (this.keys[pos] !== undefined) {
      delete this.keys[pos];
      delete this.values[pos];
    }
  }

  resolvePosition(key) {
    const hKey = this.hash(key);
    if (this.keys[hKey] === key) {
      return hKey;
    }

    let nextKey = key + 1;
    let hKeyNext;
    while (
      (hKeyNext = this.hash(nextKey)) &&
      !(this.keys[hKeyNext] === key || this.keys[hKeyNext] === undefined)
    ) {
      nextKey++;
    }

    return hKeyNext;
  }

  hash(key) {
    return key % this.size;
  }
}

const hashMap = new MyHashMap();

assert.equal(hashMap.get(1), -1);
assert.equal(hashMap.put(1, 111), hashMap);
assert.equal(hashMap.get(1), 111);
assert.equal(hashMap.remove(2), undefined);
assert.equal(hashMap.remove(1), undefined);
assert.equal(hashMap.put(1, 111), hashMap);
assert.equal(hashMap.put(1, 222), hashMap);
assert.equal(hashMap.put(11111, 123), hashMap);
assert.equal(hashMap.put(101111, 234), hashMap);

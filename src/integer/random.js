// случайное число от 0 до N
function random(max) {
  return (Math.random() * max) | 0;
}

// случайное число от X до Y
function random(min, max) {
  return (min + Math.random() * (max - min)) | 0;
}

// случайное целое число от X до Y (неверное решение - интервалы разные)
// например, для 1,3 Math.round получит значения:
// 1 - 1-1.49999 = 0.5
// 2 - 1.49999 - 2.49999 = 1
// 3 - 2.49999 - 2.99999 = 0.5
function randomInteger(min, max) {
  let rand = min + Math.random() * (max - min);
  return Math.round(rand);
}

// случайное целое число от X до Y (верное решение с выравниванием интервала)
function randomInteger(min, max) {
  // получить случайное число от (min-0.5) до (max+0.5)
  let rand = min - 0.5 + Math.random() * (max - min + 1);
  return Math.round(rand);
}

// случайное целое число от X до Y (верное решение с выравниванием интервала)
function randomInteger(min, max) {
  // случайное число от min до (max+1)
  let rand = min + Math.random() * (max - min + 1);
  return Math.floor(rand);
}

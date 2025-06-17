import assert from "assert"

// 12Trip
// Функция на вход принимает строку и разделитель
// Возвращает массив строк, разбитых по разделителю
// Разделителем может быть строка (пустая, с одним символом, более одного символа), null, undefined
// String.prototype.split() использовать нельзя, но функция должна воспроизводить её поведение

function split(str, delimiter) {
    if (delimiter === '') {
        return [...str]
    }

    if (!delimiter) {
        return [str]
    }

    const res = []
    const delLn = delimiter.length
    let part = ''
    let delIdx = 0

    for (let i = 0; i < str.length; i++) {
        const char = str[i]

        if (char === delimiter[delIdx]) {
            if (delIdx === delLn - 1) {
                res.push(part)
                part = ''
                delIdx = 0
            } else {
                delIdx++
            }
        } else {
            part += char
        }
    }

    res.push(part)

    return res
}

assert.deepEqual(split('123', ''), ['1', '2', '3'])
assert.deepEqual(split('123', null), ['123'])
assert.deepEqual(split('123', undefined), ['123'])
assert.deepEqual(split('123123', '1'), ['', '23', '23'])
assert.deepEqual(split('123123', '3'), ['12', '12', ''])
assert.deepEqual(split('123123', '12'), ['', '3', '3'])
assert.deepEqual(split('123123', '23'), ['1', '1', ''])
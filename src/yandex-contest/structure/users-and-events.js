// Есть последовательность запросов, упорядоченная по времени.
// Запросы бывают двух видов:
// 1. Пользователь user_id сгенерировал событие (нажал на красную кнопку)
// 2. Посчитать количество пользователей, которые за последние 5 минут сгенерировали >= 1000 событий (нажали на красную кнопку >= 1000 раз).
// Необходимо реализовать структуру данных, умеющую эффективно обрабатывать данные запросы.

// Counter(300, 1000)
// Counter(600, 2000)

class Counter {
  /*
  queue = [{ userId, ts }]
  users = {
    userId: N
  }
  cnt = M
  */

  #period = null;
  #threshold = null;
  queue;
  users;
  cnt;

  constructor(period = 5, threshold = 1000) {
    this.#period = period * 60 * 1000;
    this.#threshold = threshold;

    this.clear();
  }

  clean(ts) {
    const { queue, users } = this;
    if (queue.length === 0) {
      return;
    }

    const last = queue.at(-1);
    if (last && last.ts + this.#period <= ts) {
      this.clear();
      return;
    }

    while (queue.length > 0) {
      const first = queue[0];
      if (first.ts + this.#period <= ts) {
        users[first.userId]--;
        if (users[first.userId] === this.#threshold - 1) {
          this.cnt--;
        }

        queue.shift();
      } else {
        break;
      }
    }
  }

  clear() {
    this.queue = [];
    this.cnt = 0;
    this.users = {};
  }

  push(userId, ts) {
    clean(ts);

    const { queue, users } = this;
    queue.push({ userId, ts });
    users[userId] = (users[userId] || 0) + 1;

    if (users[userId] === this.#threshold) {
      this.cnt++;
    }
  }

  count(ts) {
    clean(ts);
    return this.cnt;
  }
}

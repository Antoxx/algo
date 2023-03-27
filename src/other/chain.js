const chain = (prev = null) => {
  const cur = () => {
    // идем в обратном порядке и строим связи к корню
    if (cur.prev) {
      cur.prev.next = cur;
      cur.prev();
    } else {
      // корень - запускаем
      cur.forward();
    }
  };

  cur.prev = prev;
  cur.fn = null;
  cur.args = null;

  cur.do = (fn, ...args) => {
    cur.fn = fn;
    cur.args = args;
    return chain(cur);
  };

  cur.forward = () => {
    if (!cur.fn) {
      return;
    }

    // cur.fn(...cur.args, (err, data) => {
    //   if (!err && cur.next) {
    //     cur.next.forward();
    //   } else {
    //     console.log('End at ' + cur.fn.name);
    //   }
    // });

    cur.fn(...cur.args);

    if (cur.next) {
      cur.next.forward();
    }
  };

  return cur;
};

const newChain = chain()
  .do(console.log, '1')
  .do(console.log, '2')
  .do(console.log, '3')
  .do(console.log, '4');

newChain();

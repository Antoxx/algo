'use strict';

import { setInterval } from 'timers/promises';

for await (const startTime of setInterval(100, Date.now())) {
  console.log(Date.now() - startTime);
}

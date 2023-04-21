'use strict';

import { createRoot as createRootImpl } from './ReactDOMRoot';

function createRoot() {
  console.log('createRoot is called.');
  createRootImpl();
}

export { createRoot };

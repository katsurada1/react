'use restrict';

import { createContainer } from 'react-reconciler/src/ReactFiberReconciler';

function createRoot(container) {
  const root = createContainer(container);
  return root;
}

export { createRoot };

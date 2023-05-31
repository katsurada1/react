'use restrict';

import { createContainer } from 'react-reconciler/src/ReactFiberReconciler';
import { markContainerAsRoot } from '../../../react-dom-bindings/src/client/ReactDOMComponentTree';

export function createRoot(container) {
  const root = createContainer(container);
  markContainerAsRoot(root.current, container);

  return root;
}

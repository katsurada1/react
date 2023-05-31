'use restrict';

import ReactDOMSharedInternals from '../ReactDOMSharedInternals';
const { Dispatcher } = ReactDOMSharedInternals;
import { ReactDOMClientDispatcher } from 'react-dom-bindings/src/client/ReactDOMHostConfig';
import { createContainer } from 'react-reconciler/src/ReactFiberReconciler';
import { markContainerAsRoot } from 'react-dom-bindings/src/client/ReactDOMComponentTree';
import enableFloat from 'shared/ReactFeatureFlags';

export function createRoot(container) {
  const root = createContainer(container);
  markContainerAsRoot(root.current, container);

  if (enableFloat) {
    // Set the default dispatcher to the client dispatcher
    Dispatcher.current = ReactDOMClientDispatcher;
  }
  return root;
}

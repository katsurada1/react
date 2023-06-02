/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { needsStateRestore } from ‘./ReactDOMControlledComponent’;
function finishEventHandler() {
  const controlledComponentsHavePendingUpdates = needsStateRestore();
}
export function batchedUpdates(fn, a, b) {
  finishEventHandler();
}
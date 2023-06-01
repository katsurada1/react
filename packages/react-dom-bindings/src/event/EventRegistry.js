/**
 *
 * @flow
 */

import type { DOMEventName } from './DOMEventNames';
import { enableCreateEventHandleAPI } from 'shared/ReactFeatureFlags';

export const allNativeEvents: Set<DOMEventName> = new Set();
if (enableCreateEventHandleAPI) {
  allNativeEvents.add('beforeblur');
  allNativeEvents.add('afterblur');
}

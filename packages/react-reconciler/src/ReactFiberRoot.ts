'use strict';

import { createHostRootFiber } from './ReactFiber';
import { initializeUpdateQueue } from './ReactFiberClassUpdateQueue';
import { FiberRoot } from './ReactInternalTypes';

function FiberRootNode(containerInfo) {
  this.containerInfo = containerInfo;
}

export function createFiberRoot(containerInfo): FiberRoot {
  const root: FiberRoot = new FiberRootNode(containerInfo);
  const uninitializedFiber = createHostRootFiber();
  initializeUpdateQueue(uninitializedFiber);

  return root;
}

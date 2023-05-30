'use strict';

export type Fiber = {
  // A queue of state updates and callbacks.
  updateQueue: any;
};

type BaseFiberRootProperties = {
  // Any additional information from the host associated with this root.
  containerInfo: any;
};

export type FiberRoot = BaseFiberRootProperties;
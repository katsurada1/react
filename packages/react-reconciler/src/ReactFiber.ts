import { Fiber } from './ReactInternalTypes';

function FiberNode(this) {
  // Fiber
  this.updateQueue = null;
}

function createFiber(): Fiber {
  // $FlowFixMe: the shapes are exact here but Flow doesn't like constructors
  return new FiberNode();
}

export function createHostRootFiber() {
  return createFiber();
}

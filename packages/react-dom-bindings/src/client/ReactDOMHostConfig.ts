import { FiberRoot } from 'react-reconciler/src/ReactInternalTypes';

export type Container =
  | (Element & { _reactRootContainer?: FiberRoot })
  | (Document & { _reactRootContainer?: FiberRoot })
  | (DocumentFragment & { _reactRootContainer?: FiberRoot });

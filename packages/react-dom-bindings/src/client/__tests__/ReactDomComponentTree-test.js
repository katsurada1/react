import {
  getClosestInstanceFromNode,
  precacheFiberNode,
} from '../ReactDOMComponentTree';
import { createHostRootFiber } from 'react-reconciler/src/ReactFiber';
import { ConcurrentRoot } from 'react-reconciler/src/ReactRootTags';

import { JSDOM } from 'jsdom';

describe('ReactDomComponentTree', () => {
  let dom;
  let targetNode;
  let hostInst;

  beforeEach(() => {
    dom = new JSDOM(
      '<!DOCTYPE html><div><svg><use></use></svg><div>Click me</div></div>'
    );
    targetNode = dom.window.document.querySelector('div');
    hostInst = createHostRootFiber(ConcurrentRoot);
  });

  test('precacheFiberNode', () => {
    precacheFiberNode(hostInst, targetNode);
  });

  test('getClosestInstanceFromNode', () => {
    precacheFiberNode(hostInst, targetNode);
    getClosestInstanceFromNode(targetNode);
  });
});

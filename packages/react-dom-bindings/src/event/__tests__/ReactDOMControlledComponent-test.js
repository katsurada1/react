import {
  needsStateRestore,
  enqueueStateRestore,
} from '../ReactDOMControlledComponent';

import { JSDOM } from 'jsdom';

describe('enqueueStateRestore', () => {
  let dom;
  let divNode;

  beforeEach(() => {
    dom = new JSDOM(
      '<!DOCTYPE html><div><svg><use></use></svg><div>Click me</div></div>'
    );
    global.window = dom.window;
    divNode = dom.window.document.createElement('div');
  });

  test('restoreTarget and restoreQueue', () => {
    restoreTarget = jest
      .fn()
      .mockReturnValue(dom.window.document.createElement('div'));
    restoreQueueMock = jest
      .fn()
      .mockReturnValue(dom.window.document.createElement('div'));
    enqueueStateRestore(divNode);
    // restoreTarget.mockRestore();
    // restoreQueueMock.mockRestore();
    console.log(restoreTarget);
    console.log(restoreQueueMock);
  });

  test('restoreTarget and not restoreQueue', () => {
    restoreTarget = jest
      .fn()
      .mockReturnValue(dom.window.document.createElement('div'));
    enqueueStateRestore(divNode);
    console.log(restoreTarget);
    console.log(restoreQueueMock);
  });

  test('not restoreTarget and restoreQueue', () => {
    restoreQueueMock = jest
      .fn()
      .mockReturnValue(dom.window.document.createElement('div'));
    enqueueStateRestore(divNode);
    // restoreTarget.mockRestore();
    console.log(restoreTarget);
    console.log(restoreQueueMock);
  });

  test('not restoreTarget and not restoreQueue', () => {
    enqueueStateRestore(divNode);
    // restoreTarget.mockRestore();
    console.log(restoreTarget);
    console.log(restoreQueueMock);
  });
});

describe('needsStateRestore', () => {
  let dom;
  let divNode;
  let dis;

  beforeEach(() => {
    dom = new JSDOM(
      '<!DOCTYPE html><div><svg><use></use></svg><div>Click me</div></div>'
    );
    global.window = dom.window;
    divNode = dom.window.document.createElement('div');
  });

  test('restoreTarget and restoreQueue', () => {
    restoreTarget = jest
      .fn()
      .mockReturnValue(dom.window.document.createElement('div'));
    restoreQueueMock = jest
      .fn()
      .mockReturnValue(dom.window.document.createElement('div'));
    dis = needsStateRestore();
    restoreTarget.mockRestore();
    restoreQueueMock.mockRestore();
  });

  test('restoreTarget and not restoreQueue', () => {
    restoreTarget = jest
      .fn()
      .mockReturnValue(dom.window.document.createElement('div'));
    dis = needsStateRestore();
    restoreTarget.mockRestore();
    restoreQueueMock.mockRestore();
  });

  test('not restoreTarget and restoreQueue', () => {
    restoreQueueMock = jest
      .fn()
      .mockReturnValue(dom.window.document.createElement('div'));
    dis = needsStateRestore();
    restoreTarget.mockRestore();
    restoreQueueMock.mockRestore();
  });

  test('not restoreTarget and not restoreQueue', () => {
    dis = needsStateRestore();
  });
});

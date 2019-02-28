/**
 * @jest-environment jsdom
 */
import { findNodeByAttribute } from './find-node-by-attribute';

describe('findPropValue', () => {
    beforeEach(() => {
        document.body.innerHTML = `
    <div>
      <div id="parent" data-p="parent-value">
        <div>
          <div id="child" data-c="child-value"></div>
        </div>
      </div>
    </div>`;
    });

    it('should return starting node in case it has needed attribute', () => {
        const child = <HTMLElement>document.getElementById('child');
        expect(findNodeByAttribute(child, 'data-c')).toEqual(child);
    });

    it('should return parent node in case child attr has no needed id and parent has', () => {
        const child = <HTMLElement>document.getElementById('child');
        expect(findNodeByAttribute(child, 'data-p').id).toEqual('parent');
    });

    it('should throw exception if needed node can not be found', () => {
        const child = <HTMLElement>document.getElementById('child');
        expect(() =>
            findNodeByAttribute(child, 'unexisting-attribute'),
        ).toThrow(Error);
    });
});

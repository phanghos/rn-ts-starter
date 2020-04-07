import {Component} from 'react';
import {ShallowWrapper, shallow} from 'enzyme';

export default class TestUtils {
  private static mountedComponent: any;

  static shallowRender<P = {}, S = {}, C = Component>(
    element: JSX.Element,
  ): ShallowWrapper<P, S, C> {
    if (!this.mountedComponent) {
      this.mountedComponent = shallow(element);
    }
    return this.mountedComponent;
  }

  static reset(): void {
    this.mountedComponent = undefined;
  }
}
